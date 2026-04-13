import './News.css'

const news = [
    {
        title: "IEEE RAS UJ Wins Best Chapter Award",
        date: "April 1, 2026",
        excerpt: "Our chapter has been recognized as the most active robotics chapter in the region.",
        image: "https://picsum.photos/seed/award/400/250",
    },
    {
        title: "New Partnership with Tech Giants",
        date: "March 20, 2026",
        excerpt: "Exciting collaboration with leading robotics companies.",
        image: "https://picsum.photos/seed/partner/400/250",
    },
    {
        title: "Summer Robotics Bootcamp",
        date: "March 15, 2026",
        excerpt: "2-week intensive bootcamp on embedded systems and ROS.",
        image: "https://picsum.photos/seed/bootcamp/400/250",
    },
]

export default function News() {
    return (
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
                                <a href="#" className="news-link cursor-target">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
