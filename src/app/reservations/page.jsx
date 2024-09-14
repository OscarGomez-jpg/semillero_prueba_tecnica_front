import ReservationList from '../components/ReservationList';
import ReservationForm from '../components/ReservationForm';

export default function Reservations() {
    return (
        <div>
            <h1>Reservaciones</h1>
            <ReservationForm />
            <ReservationList />
        </div>
    );
}