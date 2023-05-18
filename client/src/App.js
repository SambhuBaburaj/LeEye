
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import LoginIn from "./Pages/LoginIn";
import Register from "./Pages/Register";
import AddDetail from "./Pages/AddDetails";
import Profile from "./Pages/Profile";
import LoggedInUser from "./ProtectedRoutes/LoggedInUser";
import LoggedOutUser from "./ProtectedRoutes/LoggedOutUser";

function App() {
  return (
    <Routes>
      <Route element={<LoggedInUser/>}>
        <Route element={<LoginIn />} path="/" />
        <Route element={<Register />} path="/register" />
      </Route>

      <Route element={<LoggedOutUser/>} >
        <Route element={<AddDetail />} path="/addetails" />
        <Route element={<Profile />} path="/home" />
      </Route>
    </Routes>
  );
}

export default App;
