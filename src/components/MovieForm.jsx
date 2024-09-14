import { useState } from 'react';

export default function MovieForm() {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [duration, setDuration] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ title, director, duration, releaseDate });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar/Editar Película</h2>
            <div>
                <label>Título</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Director</label>
                <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
            </div>
            <div>
                <label>Duración</label>
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </div>
            <div>
                <label>Fecha de Estreno</label>
                <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}