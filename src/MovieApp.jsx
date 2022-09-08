import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from './Search.svg';
import './App.css';

const MovieApp = () => {

    const [movies, setMovies] = useState([]);

    // new state for searching movies input element
    const [searchTerm, setSearchTerm] = useState('');

    const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=5bae1a84';


    // Raw data: use to create a single card and display this movie..
    // const movie1 =
    // {
    //     "Title": "Italian Spiderman",
    //     "Year": "2007",
    //     "imdbID": "tt2705436",
    //     "Type": "movie",

    //     "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
    // }


    // load the movie data as component load -> useEffect
    useEffect(() => {

        // call a funct to fetch movies asyn..
        searchMovies();

    }, []); // [] -> as 2nd arg to only call at the start..

    const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
        setMovies(data.Search);
    }

    return (
        <div className="app">
            <h1> MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm} // make an api call as user searches
                    onChange={(e) => setSearchTerm(e.target.value)} // accept a callback to fetch/recall data..
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {
                        searchMovies(searchTerm);
                    }}
                ></img>
            </div>


            {
                // edge cases: if movies
                movies?.length > 0
                    ? (
                        // movie container which displays all the movies..
                        <div className="container">
                            {/* reusing movie card to display every movie */}

                            {
                                movies.map((movie) => (
                                    //render every movie in MovieCard componenet
                                    <MovieCard movie={movie} />
                                ))
                            }
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default MovieApp;
