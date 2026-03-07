import { Link } from 'react-router-dom'

const clubs = [
    {
        name: 'Tech Club',
        description: 'Focuses on coding, web development, and new technologies. Organizes workshops, hackathons and coding contests.',
        members: 120,
        events: ['Tech Workshop 2026', 'Coding Competition'],
    },
    {
        name: 'Cultural Club',
        description: 'Promotes arts, dance, music and drama. Organizes the annual cultural festival and talent shows.',
        members: 200,
        events: ['Cultural Fest'],
    },
    {
        name: 'AI Club',
        description: 'Dedicated to Artificial Intelligence and Machine Learning. Conducts seminars, paper presentations and research discussions.',
        members: 80,
        events: ['AI & ML Seminar'],
    },
    {
        name: 'Arts Club',
        description: 'For students passionate about photography, painting and creative arts. Organizes exhibitions and art competitions.',
        members: 90,
        events: ['Photography Exhibition'],
    },
    {
        name: 'Literary Club',
        description: 'Promotes reading, writing, public speaking and debate. Hosts debate championships and poetry slams.',
        members: 60,
        events: ['Debate Championship'],
    },
]

function Clubs() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>College Clubs</h2>
            <p>Explore the different clubs and their activities.</p>

            {clubs.map((club, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px' }}>
                    <h3>{club.name}</h3>
                    <p>{club.description}</p>
                    <p><strong>Members:</strong> {club.members}</p>
                    <p><strong>Events:</strong> {club.events.join(', ')}</p>
                </div>
            ))}

            <Link to="/events">View All Events →</Link>
        </div>
    )
}

export default Clubs
