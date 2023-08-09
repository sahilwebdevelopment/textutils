import './App.css';
import './script.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/alert';
import React, { useState } from "react";

function App() {
  const [mode,setMode] = useState("dark")
  function toggleMode(){
    if(mode==="dark"){
    setMode("light")
    document.body.style.backgroundColor = "#212529"
    document.body.style.color = "white"
    showAlert("Dark mode has been successfully enabled.","dark")
  }else{
    setMode("dark")
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    showAlert("Dark mode has been successfully disabled.","dark")
  }
}
const [alert,setAlert] = useState(null)
function showAlert(message, type){
  setAlert({
    message: message,
    type: type,
  })
  setTimeout(()=>{
    setAlert(null)
  },1000)
}
  return (
     <>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} />
     <TextForm showAlert={showAlert} heading="Enter Text Below" mode={mode}/>
     </>
  );
}

export default App;
