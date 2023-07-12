import { FETCH_MOVIE_LIST_SUCCESS, FETCH_MOVIE_DETAILS_SUCCESS } from '../actions/actionTypes';

const initialState = {
    movies: [],
    selectedMovie: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                movies: action.payload,
            };
        case FETCH_MOVIE_DETAILS_SUCCESS:
            const selectedMovie = state.movies.find((movie) => movie.id === action.payload.id);
            return {
                ...state,
                selectedMovie: selectedMovie
                    ? { ...action.payload, title: selectedMovie.title, genre: selectedMovie.genre }
                    : null,
            };
        default:
            return state;
    }
};

export default movieReducer;
