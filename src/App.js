import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route>
          <Route path="appointment" element={<Appointment />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
