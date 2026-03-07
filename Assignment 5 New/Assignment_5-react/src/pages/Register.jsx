import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

const eventNames = {
    1: 'Tech Workshop 2026',
    2: 'Cultural Fest',
    3: 'AI & ML Seminar',
    4: 'Coding Competition',
    5: 'Photography Exhibition',
    6: 'Debate Championship',
}

function Register() {
    const { id } = useParams()
    const eventName = eventNames[id] || 'Unknown Event'
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        year: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div style={{ padding: '20px' }}>
                <h2>Registration Successful!</h2>
                <p><strong>{formData.name}</strong>, you have been registered for <strong>{eventName}</strong>.</p>
                <p>A confirmation will be sent to <strong>{formData.email}</strong>.</p>
                <br />
                <Link to="/events">← Back to Events</Link>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Register for: {eventName}</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Full Name:<br />
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '5px' }} />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:<br />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '5px' }} />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Phone:<br />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '5px' }} />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Department:<br />
                        <select name="department" value={formData.department} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}>
                            <option value="">Select Department</option>
                            <option value="Computer">Computer Engineering</option>
                            <option value="IT">Information Technology</option>
                            <option value="ENTC">ENTC</option>
                            <option value="Mechanical">Mechanical Engineering</option>
                            <option value="Civil">Civil Engineering</option>
                        </select>
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Year:<br />
                        <select name="year" value={formData.year} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}>
                            <option value="">Select Year</option>
                            <option value="FE">FE</option>
                            <option value="SE">SE</option>
                            <option value="TE">TE</option>
                            <option value="BE">BE</option>
                        </select>
                    </label>
                </div>
                <button type="submit" style={{ padding: '8px 20px', cursor: 'pointer' }}>Register</button>
            </form>
            <br />
            <Link to={`/events/${id}`}>← Back to Event Details</Link>
        </div>
    )
}

export default Register
