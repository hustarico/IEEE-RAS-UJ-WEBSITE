import './Events.css'

const events = [
    {
        title: "Robotics Workshop 101",
        date: "March 15, 2026",
        location: "University of Jordan",
        description: "Introduction to robotics fundamentals with hands-on robot assembly.",
        image: "https://picsum.photos/seed/robotics/600/400",
        status: "past"
    },
    {
        title: "AI in Automation Summit",
        date: "April 20, 2026",
        location: "Amman, Jordan",
        description: "Exploring the intersection of artificial intelligence and industrial automation.",
        image: "https://picsum.photos/seed/ai/600/400",
        status: "upcoming"
    },
    {
        title: "Line Follower Competition",
        date: "May 5, 2026",
        location: "University of Jordan",
        description: "Design and build autonomous line-following robots to compete for prizes.",
        image: "https://picsum.photos/seed/competition/600/400",
        status: "upcoming"
    },
    {
        title: "ROS Development Bootcamp",
        date: "February 10, 2026",
        location: "Online",
        description: "Intensive workshop on Robot Operating System development.",
        image: "https://picsum.photos/seed/ros/600/400",
        status: "past"
    },
]

export default function Events() {
    return (
        <section className="events-section" id="events">
            <div className="events-container">
                <h2 className="section-title">Our <span>Events</span></h2>
                
                <div className="events-grid">
                    {events.map((event, index) => (
                        <div 
                            key={index} 
                            className={`event-card about-card cursor-target ${event.status}`}
                        >
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                                <span className={`event-status ${event.status}`}>
                                    {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                                </span>
                            </div>
                            <div className="event-content">
                                <h3>{event.title}</h3>
                                <div className="event-meta">
                                    <span className="event-date">{event.date}</span>
                                    <span className="event-location">{event.location}</span>
                                </div>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
