import { Link } from 'react-router-dom'
import './EventsPage.css'

const events = [
    {
        title: "ROS Development Bootcamp",
        date: "February 10, 2026",
        image: "https://picsum.photos/seed/ros/600/400",
        description: "Intensive workshop on Robot Operating System development.",
        status: "past"
    },
    {
        title: "Introduction to Robotics",
        date: "February 25, 2026",
        image: "https://picsum.photos/seed/intro/600/400",
        description: "Beginner-friendly workshop covering robotics fundamentals.",
        status: "past"
    },
    {
        title: "Regional Robotics Competition",
        date: "March 15, 2026",
        image: "https://picsum.photos/seed/regional/600/400",
        description: "Our team competed against top universities in the region.",
        status: "past"
    },
    {
        title: "Robotics Workshop 101",
        date: "March 15, 2026",
        image: "https://picsum.photos/seed/robotics/600/400",
        description: "Introduction to robotics fundamentals with hands-on robot assembly.",
        status: "past"
    },
    {
        title: "AI in Automation Summit",
        date: "April 20, 2026",
        image: "https://picsum.photos/seed/ai/600/400",
        description: "Exploring the intersection of artificial intelligence and industrial automation.",
        status: "upcoming"
    },
    {
        title: "Line Follower Competition",
        date: "May 5, 2026",
        image: "https://picsum.photos/seed/competition/600/400",
        description: "Design and build autonomous line-following robots to compete for prizes.",
        status: "upcoming"
    },
    {
        title: "Summer Robotics Bootcamp",
        date: "June 1, 2026",
        image: "https://picsum.photos/seed/summer/600/400",
        description: "2-week intensive bootcamp covering embedded systems, ROS, and computer vision.",
        status: "upcoming"
    },
]

export default function EventsPage() {
    const pastEvents = events.filter(e => e.status === 'past')
    const upcomingEvents = events.filter(e => e.status === 'upcoming')

    return (
        <section className="events-page">
            <div className="events-page-header">
                <Link to="/" className="back-link cursor-target">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Home
                </Link>
                <h1>Our <span>Events</span></h1>
                <p>Explore our journey through workshops, competitions, and community events</p>
            </div>

            <div className="timeline">
                {upcomingEvents.length > 0 && (
                    <div className="timeline-section">
                        <h2 className="timeline-heading upcoming">Upcoming Events</h2>
                        <div className="timeline-items">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="timeline-item upcoming">
                                    <div className="timeline-marker">
                                        <div className="marker-dot"></div>
                                        <div className="marker-line"></div>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-image">
                                            <img src={event.image} alt={event.title} />
                                            <span className="event-badge">Upcoming</span>
                                        </div>
                                        <div className="timeline-info">
                                            <span className="timeline-date">{event.date}</span>
                                            <h3>{event.title}</h3>
                                            <p>{event.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {pastEvents.length > 0 && (
                    <div className="timeline-section">
                        <h2 className="timeline-heading past">Past Events</h2>
                        <div className="timeline-items">
                            {pastEvents.map((event, index) => (
                                <div key={index} className="timeline-item past">
                                    <div className="timeline-marker">
                                        <div className="marker-dot"></div>
                                        <div className="marker-line"></div>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-image">
                                            <img src={event.image} alt={event.title} />
                                        </div>
                                        <div className="timeline-info">
                                            <span className="timeline-date">{event.date}</span>
                                            <h3>{event.title}</h3>
                                            <p>{event.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
