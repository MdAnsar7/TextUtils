import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { Routes, Route, Link, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whesteher dark mmode is enabled or not
  const [alert, setAlart] = useState(null);

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const showAlert = (message, type) => {
    setAlart({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlart(null);
    }, 1500);
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    if (mode === "light") {
      // console.log(cls);

      document.body.classList.add('bg-' +cls)
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils is New";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />


        <div className="container my-3">
          <Routes>
          <Route path="/About" element={<About mode = {mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading=" Enter the text to analyze below" mode={mode}/>} />

            {/* </Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
