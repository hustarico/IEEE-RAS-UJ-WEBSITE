import './OurTeams.css'

import CircularGallery from "./CircularGallery";

import placeholderImg from './../../../assets/daNigga.png';

const teamsImages = [

    { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'Bridge' },
    { image: `https://picsum.photos/seed/2/800/600`, text: 'Desk Setup' },
    { image: placeholderImg, text: 'honored member'},
]


export default function OurTeams() {

    return <div style={{ height: '600px', position: 'relative', display: 'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>

        <h2 className="subtitle">Our <span>Teams</span></h2>

        <CircularGallery 
            bend={0} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02}

            items={teamsImages}
            // bend={1}
            // borderRadius={0.05}
            // scrollSpeed={2}
            // scrollEase={0.05}
        />
    </div>
}