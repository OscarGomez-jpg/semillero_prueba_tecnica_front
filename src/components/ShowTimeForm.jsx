import { useState } from 'react';

export default function ShowtimeForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ date, time });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar/Editar Horario de Proyección</h2>
            <div>
                <label>Fecha</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
                <label>Hora</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}