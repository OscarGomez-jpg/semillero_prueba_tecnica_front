import { useState, useEffect } from 'react';

export default function RoomList() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Fetch rooms from API
        setRooms([
            { number: 1, capacity: 100 },
            { number: 2, capacity: 150 },
        ]);
    }, []);

    return (
        <div>
            <h2>Lista de Salas</h2>
            <ul>
                {rooms.map((room, index) => (
                    <li key={index}>Sala {room.number} - Capacidad: {room.capacity}</li>
                ))}
            </ul>
        </div>
    );
}