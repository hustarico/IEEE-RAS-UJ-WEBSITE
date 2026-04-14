import './News.css';
import { useState } from 'react';

const news = [
    {
        title: "IEEE RAS UJ Wins Best Chapter Award",
        date: "April 1, 2026",
        excerpt: "Our chapter has been recognized as the most active robotics chapter in the region.",
        image: "https://picsum.photos/seed/award/800/500",
        content: "In a remarkable achievement, IEEE RAS UJ has been honored with the Best Chapter Award for the 2025-2026 academic year. This recognition comes as a testament to the dedication and hard work of our entire team.\n\nThroughout the year, we organized over 15 workshops, 3 major competitions, and numerous networking events that brought together robotics enthusiasts from across the region. Our initiatives in promoting STEM education and fostering innovation have made a significant impact on the university community.\n\nThe award committee specifically highlighted our Summer Robotics Bootcamp and the Autonomous Maze Solver competition as exemplary programs that set a benchmark for other chapters.\n\nWe extend our heartfelt gratitude to all members, advisors, and supporters who contributed to this success. This achievement motivates us to continue pushing boundaries and inspiring the next generation of robotics engineers."
    },
    {
        title: "New Partnership with Tech Giants",
        date: "March 20, 2026",
        excerpt: "Exciting collaboration with leading robotics companies.",
        image: "https://picsum.photos/seed/partner/800/500",
        content: "IEEE RAS UJ is thrilled to announce strategic partnerships with three leading robotics companies: RoboTech Industries, Automata Solutions, and Neural Robotics.\n\nThese partnerships will provide our members with exclusive access to cutting-edge robotics hardware, software licenses, internship opportunities, and mentorship programs from industry professionals.\n\nAs part of this collaboration, our members will have the opportunity to work on real-world projects using state-of-the-art equipment, attend exclusive workshops conducted by industry experts, and participate in hackathons with attractive prizes.\n\nWe believe these partnerships will significantly enhance the learning experience and career prospects for our members, bridging the gap between academic knowledge and industry practice."
    },
    {
        title: "Summer Robotics Bootcamp",
        date: "March 15, 2026",
        excerpt: "2-week intensive bootcamp on embedded systems and ROS.",
        image: "https://picsum.photos/seed/bootcamp/800/500",
        content: "Join us for an intensive 2-week robotics bootcamp this summer! This comprehensive program is designed to take you from the basics of embedded systems to advanced ROS (Robot Operating System) development.\n\nWeek 1: Embedded Systems Fundamentals\n- Microcontroller programming with Arduino and ESP32\n- Sensor integration and signal processing\n- Motor control and actuator systems\n- Building your first robot prototype\n\nWeek 2: ROS Development\n- Introduction to ROS2 architecture\n- Navigation stack and path planning\n- Computer vision with ROS\n- Simulating and testing your robot\n\nThe bootcamp includes hands-on projects, team challenges, and a final competition. No prior experience required - just bring your enthusiasm!"
    },
]

export default function News() {
    const [selectedNews, setSelectedNews] = useState(null);

    return (
        <>
            <section className="news-section" id="news">
                <div className="news-container">
                    <h2 className="news-title">Latest <span>News</span></h2>
                    
                    <div className="news-flex">
                        {news.map((item, index) => (
                            <div key={index} className="news-card cursor-target">
                                <div className="news-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="news-content">
                                    <span className="news-date">{item.date}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.excerpt}</p>
                                    <button 
                                        className="news-link cursor-target"
                                        onClick={() => setSelectedNews(item)}
                                    >
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedNews && (
                <div className="news-modal-overlay" onClick={() => setSelectedNews(null)}>
                    <div className="news-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="news-modal-close" onClick={() => setSelectedNews(null)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        </button>
                        <img src={selectedNews.image} alt={selectedNews.title} className="news-modal-image" />
                        <div className="news-modal-content">
                            <span className="news-modal-date">{selectedNews.date}</span>
                            <h2>{selectedNews.title}</h2>
                            {selectedNews.content.split('\n\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
