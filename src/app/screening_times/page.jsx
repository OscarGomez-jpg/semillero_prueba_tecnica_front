import ShowtimeList from '../components/ShowtimeList';
import ShowtimeForm from '../components/ShowtimeForm';

export default function Showtimes() {
    return (
        <div>
            <h1>Horarios de Proyección</h1>
            <ShowtimeForm />
            <ShowtimeList />
        </div>
    );
}