import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
