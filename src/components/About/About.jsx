import './About.css'

import WhoWeAre from './WhoWeAre.jsx'
import Mission from './Mission.jsx'
import Vision from './Vision.jsx'
import Stats from './Stats.jsx'
import Team from './Team.jsx'
// import TeamsCarousel from './TeamsCarousel.jsx'


let Teams = [
    <Team teamName="advisor" number={1}/>,
    <Team teamName="comittee" number={4}/>,
    <Team teamName="leaders" number={6}/>,
    <Team teamName="dancers" number={3}/>,

]


export default function About(){
    return <div className="about-us" id="about-us">
        <div className="about-container">
            <WhoWeAre/>
            <Mission/>
            <Vision/>
            <Stats/>
            
        </div>

        <div className="teams">
            {Teams.map(team=>{return team})}
        </div>

    </div>
}