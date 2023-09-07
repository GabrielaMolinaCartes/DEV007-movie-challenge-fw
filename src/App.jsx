import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllMovies from "./components/Pages/AllMovies";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllMovies />
      <Footer />
    </div>
  );
}

export default App;
