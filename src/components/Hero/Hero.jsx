import './Hero.css'
import TextPressure from './TextPressure'

import heroVideo from '../../assets/vidBg2Compress2.mp4'

export default function Hero(){
    return <section className="hero-section" id='home'>
        <div className="hero-background">
            <video autoPlay muted loop playsInline >
                <source src={heroVideo} type='video/mp4'/>
            </video>

            <div className="hero-content">
                <div className="hero-card cursor-target">

                    {/* <h1>IEEE<br/><span>RAS</span><br/>UJ</h1> */}
                    <TextPressure
                        text="IEEE"
                        flex
                        alpha={false}
                        stroke={false}
                        width
                        weight
                        italic={false}
                        textColor="#ffffff"
                        strokeColor="#5227FF"
                        // minFontSize={20}
                    />
                    <TextPressure
                        text="RAS"
                        flex
                        alpha={false}
                        stroke={false}
                        width
                        weight
                        italic={false}
                        textColor="#ffffff"
                        strokeColor="#5227FF"
                        // minFontSize={20}
                    />
                    <TextPressure
                        text="UJ"
                        flex
                        alpha={false}
                        stroke={false}
                        width
                        weight
                        italic={false}
                        textColor="#ffffff"
                        strokeColor="#5227FF"
                        // minFontSize={20}
                    />
                    <h3>Design. Build. Automate. Elevate.</h3>
                    <button >join us</button>
                </div>
            </div>
        </div>
    </section>
}