import { useState, useEffect } from 'react';

export default function ShowtimeList() {
    const [showtimes, setShowtimes] = useState([]);

    useEffect(() => {
        // Fetch showtimes from API
        setShowtimes([
            { date: '2023-01-01', time: '18:00' },
            { date: '2023-01-02', time: '20:00' },
        ]);
    }, []);

    return (
        <div>
            <h2>Lista de Horarios de Proyección</h2>
            <ul>
                {showtimes.map((showtime, index) => (
                    <li key={index}>{showtime.date} - {showtime.time}</li>
                ))}
            </ul>
        </div>
    );
}