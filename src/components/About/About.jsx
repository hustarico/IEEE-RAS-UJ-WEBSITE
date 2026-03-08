import './About.css'

import WhoWeAre from './WhoWeAre.jsx'
import Mission from './Mission.jsx'
import Vision from './Vision.jsx'
import Stats from './Stats.jsx'
import Team from './Team.jsx'
// import TeamsCarousel from './TeamsCarousel.jsx'


let Teams = [
    <Team teamName="advisor" team={[
        {
            name: "Mohammad Al Mashagbeh",
            title: "Advisor"
        }
    ]}/>,
    <Team teamName="comittee" team={[
        {
            name: "Yousef El Taweel",
            title: "Chair"
        },
        {
            name: "Yahia Hussunah",
            title: "Vice"
        },
        {
            name: "Omar Eshtewe",
            title: "Treasurer"
        },
        {
            name: "Hala Al Dalu",
            title: "Secretary"
        },
        {
            name: "Hussam Tarteer",
            title: "Webmaster"
        },
    ]}/>,
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