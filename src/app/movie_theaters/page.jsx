import RoomList from '../components/RoomList';
import RoomForm from '../components/RoomForm';

export default function Rooms() {
    return (
        <div>
            <h1>Salas</h1>
            <RoomForm />
            <RoomList />
        </div>
    );
}