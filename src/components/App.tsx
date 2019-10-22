import "./App.css";
import React, { useEffect, useReducer } from 'react';
import Header from "./Header";
import Movie, {MovieType} from "./Movie";
import Search from "./Search";
import { ActionType, Actions } from './../actions/actions';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

type State = {
  loading: boolean,
  movies: MovieType[],
  errorMessage?: string
}

const reducer = (state: State, action: ActionType) => {
  switch(action.type){
    case Actions.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case Actions.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies:  action.payload
      }
    case Actions.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      }
    default:
      return state
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
          dispatch({
            type: Actions.SEARCH_MOVIES_SUCCESS,
            payload: jsonResponse.Search
          })
      });
  },[])

  const search = (searchValue: string): void => {
    dispatch({
      type: Actions.SEARCH_MOVIES_REQUEST
    })

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if(jsonResponse.Response === "True"){
          dispatch({
            type: Actions.SEARCH_MOVIES_SUCCESS,
            payload: jsonResponse.Search
          })
        } else{
          dispatch({
            type: Actions.SEARCH_MOVIES_FAILURE,
            error: jsonResponse.Error
          })
        }
      })
  }

  const { movies, errorMessage, loading} = state;

  return (
    <div className="App">
      <Header text="映画検索 React Hook" />
      <Search search={search} />
      <p className="App-intro">好みの映画を検索しましょうc(`Д´と⌒ｃ)つ彡 英語推奨</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie: MovieType, index: number) => {
            return <Movie key={`${index}-${movie.Title}`} movie={movie} />
          })
        )}
      </div>
    </div>
  );
}

export default App;
