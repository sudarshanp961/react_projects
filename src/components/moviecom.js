import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovieList, fetchMovieDetails } from '../actions/movieActions';

const Moviecom = ({ movies, selectedMovie, fetchMovieList, fetchMovieDetails }) => {
    useEffect(() => {
        fetchMovieList(); // Fetch the list of movies initially
    }, [fetchMovieList]);

    const handleMovieClick = (movieId) => {
        fetchMovieDetails(movieId);
    };

    return (
        <div>
            <h2>Movies:</h2>
            {movies.length > 0 ? (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                            {movie.title} - {movie.genre}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading movies...</p>
            )}
            {selectedMovie ? (
                <div>
                    <h2>Selected Movie:</h2>
                    <p>Title: {selectedMovie.title}</p>
                    <p>Genre: {selectedMovie.genre}</p>
                </div>
            ) : (
                <p>No movie selected</p>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.movie.movies,
        selectedMovie: state.movie.selectedMovie,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieList: () => dispatch(fetchMovieList()),
        fetchMovieDetails: (movieId) => dispatch(fetchMovieDetails(movieId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Moviecom);
