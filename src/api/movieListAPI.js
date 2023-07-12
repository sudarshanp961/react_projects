export const fetchMovieList = () => {
    return new Promise((resolve, reject) => {
        // Simulated API call to fetch the list of movies
        setTimeout(() => {
            const movies = [
                { id: 1, title: 'mersal', genre: 'Action' },
                { id: 2, title: 'doctor', genre: 'Comedy' },
                { id: 3, title: 'ponnenselvan', genre: 'Drama' },

            ];
            resolve(movies);
        }, 1000);
    });
};
