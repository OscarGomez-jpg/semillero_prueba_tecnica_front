import { useState, useEffect } from 'react';

export default function ReservationList() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Fetch reservations from API
        setReservations([
            { client: 'Cliente 1', seats: 2 },
            { client: 'Cliente 2', seats: 4 },
        ]);
    }, []);

    return (
        <div>
            <h2>Lista de Reservaciones</h2>
            <ul>
                {reservations.map((reservation, index) => (
                    <li key={index}>{reservation.client} - Asientos: {reservation.seats}</li>
                ))}
            </ul>
        </div>
    );
}