import './About.css'

import WhoWeAre from './WhoWeAre.jsx'
import Mission from './Mission.jsx'
import Vision from './Vision.jsx'
import Stats from './Stats.jsx'

export default function About(){
    return <div className="about-us" id="about-us">
        <div className="about-container">
            <WhoWeAre/>
            <Mission/>
            <Vision/>
            <Stats/>
        </div>
    </div>
}