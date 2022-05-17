import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.env";
import { getAuth, createUserWithEmailAndPassword,updateProfile,signOut,signInWithPopup,onAuthStateChanged,signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

initializeFirebase();
const useFirebase =() =>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError,setAuthError] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser =(email, password,name,history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser ={email,displayName:name};
            setUser(newUser);

            //save user 
            saveUser(email,name, 'POST');
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
               
            }).catch((error) => {
               
            });
            history.replace('/');
          })
          .catch((error) => {
             
            setAuthError(error.message);
            // ..
          })
          .finally((() => setIsLoading(false)));
        
    }

    const loginUser =(email, password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally((() => setIsLoading(false)));

    }

    const signInWithGoogle = (location,history) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        saveUser(user.email,user.displayName,'PUT')
        setAuthError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
        // ...
      }).catch((error) => {
        setAuthError(error.message);
      }).finally((() => setIsLoading(false)));
    
    }
    
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              const uid = user.uid;
              // ...
            } else {
              setUser({})
            }
            setIsLoading(false);
          });

          return ()=> unsubscribe;
    },[])

    const logout=()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally((() => setIsLoading(false)));
          
    }

    const saveUser =(email,displayName,method)=>{
        const user={email,displayName};
        fetch('http://localhost:5000/users',{
          method: method,
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()

    }

    return{
        user,
        registerUser,
        logout,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle
    }
}

export default useFirebase;