import { useState } from 'react';

export default function ReservationForm() {
    const [client, setClient] = useState('');
    const [seats, setSeats] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ client, seats });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar/Editar Reservación</h2>
            <div>
                <label>Cliente</label>
                <input type="text" value={client} onChange={(e) => setClient(e.target.value)} />
            </div>
            <div>
                <label>Asientos</label>
                <input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}