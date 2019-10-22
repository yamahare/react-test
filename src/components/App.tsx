import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Movie, {MovieType} from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
          setMovies(jsonResponse.Search)
          setLoading(false);
      });
  }, [])

  const search = (searchValue: string): void => {
    setLoading(true);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if(jsonResponse.Response === "True"){
          setMovies(jsonResponse.Search)
          setLoading(false);
        } else{
          setLoading(false);
        }
      })
  }

  return (
    <div>
      <Header text="HOOKED" />
      <Search search={search} />
      {loading ? (
        <span>loading...</span>
      ) : (
        movies.map((movie: MovieType, index) => {
          return <Movie key={`${index}-${movie.Title}`} movie={movie} />
        })
      )}
    </div>
  );
}

export default App;
