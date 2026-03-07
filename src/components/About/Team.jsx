import MemberCard from "./MemberCard/MemberCard"

function cards(number){
    
    let arr = [];
    for(let i =0;i<number;i++){
        arr[i] = <MemberCard/>
    }
    return arr;
}

export default function Team({teamName,number}){




    return <div className="team-container">
        <h2>Our <span>{teamName}</span></h2>

        <div className="cards-container">
            {cards(number)}
        </div>
    </div>
}