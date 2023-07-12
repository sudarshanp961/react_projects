export const fetchMovieDetails = (movieId) => {
    return new Promise((resolve, reject) => {
        // Simulated API call to fetch the details of a movie
        setTimeout(() => {
            const movieDetails = {
                id: movieId,
                title: `Movie ${movieId}`,
                // title: 'unknown',
                genre: 'Unknown',
            };
            resolve(movieDetails);
        }, 1000);
    });
};
