import "./App.css";
import Header from "./assets/components/Header/Header";
import Home from "./assets/components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import FaqQuestion from "./assets/components/FAQ/FaqQuestion";

function App() {
  const [readTime, setReadTime] = useState("");

  const handleReadTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };
  // console.log(readTime)
  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <Home  handleReadTime={handleReadTime} readTime={readTime} ></Home>
      <ToastContainer></ToastContainer>
      <FaqQuestion></FaqQuestion>
    </div>
  );
}

export default App;
