// import { fetchMovieList as fetchMovieListAPI, fetchMovieDetails as fetchMovieDetailsAPI } from '../api/movieAPI';
import { fetchMovieList as fetchMovieListAPI } from '../api/movieListAPI';
import { fetchMovieDetails as fetchMovieDetailsAPI } from '../api/movieDetailsAPI';
import { FETCH_MOVIE_LIST_SUCCESS, FETCH_MOVIE_DETAILS_SUCCESS } from './actionTypes';

export const fetchMovieList = () => {
    return (dispatch) => {
        fetchMovieListAPI()
            .then((movies) => {
                dispatch({ type: FETCH_MOVIE_LIST_SUCCESS, payload: movies });
            })
            .catch((error) => {
                console.error('Error fetching movie list:', error);
            });
    };
};

export const fetchMovieDetails = (movieId) => {
    return (dispatch) => {
        fetchMovieDetailsAPI(movieId)
            .then((movie) => {
                dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: movie });
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });
    };
};
