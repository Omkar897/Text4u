import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleblue = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#041f45";
      showAlert("Switched to dark mode successfully", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Switched to Light mode successfully", "success");
    }
  };

  const togglegray = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Switched to dark mode successfully", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Switched to Light mode successfully", "success");
    }
  };

  const togglered = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#410409";
      showAlert("Switched to dark mode successfully", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Switched to Light mode successfully", "success");
    }
  };

  const togglegreen = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#03381f";
      showAlert("Switched to dark mode successfully", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Switched to Light mode successfully", "success");
    }
  };

  const toggleyellow = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#483600";
      showAlert("Switched to dark mode successfully", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Switched to Light mode successfully", "success");
    }
  };

  const togglecyan = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#01424f";
      showAlert("Switched to dark mode successfully", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Switched to Light mode successfully", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          about="About Textutils"
          mode={mode}
          toggleblue={toggleblue}
          togglegray={togglegray}
          togglered={togglered}
          togglegreen={togglegreen}
          toggleyellow={toggleyellow}
          togglecyan={togglecyan}
        />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - Word counter, Characher counter, Alternate text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
