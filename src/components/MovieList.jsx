import { useState, useEffect } from 'react';

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch movies from API
        setMovies([
            { title: 'Movie 1', director: 'Director 1', duration: 120, releaseDate: '2023-01-01' },
            { title: 'Movie 2', director: 'Director 2', duration: 90, releaseDate: '2023-02-01' },
        ]);
    }, []);

    return (
        <div>
            <h2>Lista de Películas</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie.title} - {movie.director} - {movie.duration} mins - {movie.releaseDate}</li>
                ))}
            </ul>
        </div>
    );
}