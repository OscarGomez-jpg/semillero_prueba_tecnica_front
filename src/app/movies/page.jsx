import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

export default function Movies() {
    return (
        <div>
            <h1>Películas</h1>
            <MovieForm />
            <MovieList />
        </div>
    );
}