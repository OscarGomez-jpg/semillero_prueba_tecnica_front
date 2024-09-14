import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Bienvenido al Sistema de Gestión del Cine</h1>
            <nav>
                <ul>
                    <li><Link href="/movies">Películas</Link></li>
                    <li><Link href="/rooms">Salas</Link></li>
                    <li><Link href="/showtimes">Horarios de Proyección</Link></li>
                    <li><Link href="/reservations">Reservaciones</Link></li>
                </ul>
            </nav>
        </div>
    );
}