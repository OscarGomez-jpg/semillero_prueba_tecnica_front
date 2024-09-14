import { useState } from 'react';

export default function RoomForm() {
    const [number, setNumber] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ number, capacity });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar/Editar Sala</h2>
            <div>
                <label>Número</label>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div>
                <label>Capacidad</label>
                <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}