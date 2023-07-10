import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/Login/SignUp";
import SignIn from "./pages/Login/SignIn";
import Sidebar from "./components/Sidebar/Sidebar";
import Error from "./pages/error/Error";
import Chat from "./components/Chat/Chat";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
        <> 
          <NavBar />
          <Home />
        </>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Sidebar/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route element={<Error/>}/>
      </Routes>
    </>
  );
};

export default App;
