import "../components/navbar.css";

import { useEffect, useState } from "react";

function Movies() {
  const [moviesAll, setMoviesAll] = useState([]);

  const allMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=44eb3ac861dd9f5c9d8114ae8fd29ca3";
    const res = await fetch(url);
    const data = await res.jason();
    setMoviesAll = data.results;
  };
  useEffect(() => {
    allMovies();
  }, []);
}
export default Movies;
