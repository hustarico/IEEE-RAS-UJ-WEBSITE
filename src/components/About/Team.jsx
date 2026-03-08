import AdvisorImg from "../../assets/Team-images/Advisor.jpg"
import ChairImg from "../../assets/Team-images/Chair.jpg"
import ViceImg from "../../assets/Team-images/Vice.jpg"
import TreasurerImg from "../../assets/Team-images/Treasurer.jpg"
import SecretaryImg from "../../assets/Team-images/Secretary.jpg"
import WebmasterImg from "../../assets/Team-images/Webmaster.jpg"
import MemberCard from "./MemberCard/MemberCard"



function getImgBasedOnRole(role){
    switch(role.toLowerCase()){
        case 'advisor':
            return AdvisorImg;
        case 'chair':
            return ChairImg;
        case 'vice':
            return ViceImg;
        case 'treasurer':
            return TreasurerImg;
        case 'secretary':
            return SecretaryImg;
        case 'webmaster':
            return WebmasterImg;
        default:
            return null;
    }
}

function cards(number){

    
    let arr = [];
    for(let i =0;i<number;i++){
        arr[i] = <MemberCard/>
    }
    return arr;
}

export default function Team({teamName,number,team}){




    return <div className="team-container">
        <h2>Our <span>{teamName}</span></h2>
        <div className="cards-container">

            {
                team.map((member)=>{
                    return <MemberCard name={member.name} title={member.title} img={getImgBasedOnRole(member.title)}/>
                }
                )
            }
        </div>
    </div>
}