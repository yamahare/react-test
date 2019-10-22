import "./App.css";
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
  },[])

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
    <div className="App">
      <Header text="映画検索 React Hook" />
      <Search search={search} />
      <p className="App-intro">好みの映画を検索しましょうc(`Д´と⌒ｃ)つ彡 英語推奨</p>
      <div className="movies">
        {loading ? (
          <span>loading...</span>
        ) : (
          movies.map((movie: MovieType, index) => {
            return <Movie key={`${index}-${movie.Title}`} movie={movie} />
          })
        )}
      </div>
    </div>
  );
}

export default App;
