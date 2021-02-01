const movies = [
    {
        id: 0,
        name: "Love&Trouble",
        score: 3
    },
    {
        id: 1,
        name: "Old Boy",
        score: 4
    },
    {
        id: 0,
        name: "A Star Is Born",
        score: 5
    },
    {
        id: 0,
        name: "CoCo",
        score: 5
    }
 ];

 export const getMovies = () => movies;

 export const getById = id => {
     const filteredMovies = movies.filter(movie => movie.id === String(id));
     return filteredMovies[0];
 };

 export const deleteMovie = (id) => {
     const cleanedMovies = movies.filter(movie => movie.id !== String(id));
     if (movies.length > cleanedMovies.length) {
         movies = cleanedMovies;
         return true;
     } else {
         return false;
     }
 };

 export const addMovie = (name, score) => {
     const newMovie = {
         id: `${movies.length + 1}`,
         name,
         score
     };
     movies.push(newMovie);
     return newMovie;
 };