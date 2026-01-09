import './App.css'
import Home from './pages/home/home.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/login.jsx'
import SignUp from './pages/signup/signUp.jsx'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';
import SocketProvider from './socketProvider.js';
function App() {
  const {authUser}= useAuthContext()
  return (
    <>
    {/* <Home /> */}
    {authUser && <SocketProvider userId={authUser._id} />}
    <Router>
      <div className="p-4 h-screen flex items-center justify-center">
         <Routes>
          <Route exact path="/" element={authUser? <Home />: <Navigate to = {"/login"}/>}/>
          <Route exact path="/login" element={authUser ? <Navigate to="/" /> : <Login />}/>
          <Route exact path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />}/>
         </Routes>
         <Toaster/>
      </div>
      </Router>
    </>
  )
}
export default App
