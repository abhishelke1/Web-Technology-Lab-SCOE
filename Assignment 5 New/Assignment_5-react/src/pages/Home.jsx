import { Link } from 'react-router-dom'

const upcomingEvents = [
    { id: 1, title: 'Tech Workshop 2026', date: 'March 15, 2026', club: 'Tech Club' },
    { id: 2, title: 'Cultural Fest', date: 'March 22, 2026', club: 'Cultural Club' },
    { id: 3, title: 'AI & ML Seminar', date: 'April 5, 2026', club: 'AI Club' },
]

function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Welcome to College Event Management System</h2>
            <p>Stay updated with all upcoming college events, workshops, seminars, and club activities.</p>

            <h3>Upcoming Events</h3>
            <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#f0f0f0' }}>
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Club</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {upcomingEvents.map(event => (
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td>{event.date}</td>
                            <td>{event.club}</td>
                            <td><Link to={`/events/${event.id}`}>View Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />
            <Link to="/events">Browse All Events →</Link>
        </div>
    )
}

export default Home
