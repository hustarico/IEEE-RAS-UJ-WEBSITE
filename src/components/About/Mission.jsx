import { useRef } from "react";

export default function Mission({spotlightColor = 'rgba(255, 255, 255, 0.25)' }){


    const divRef = useRef(null);
    
        const handleMouseMove = e => {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    };

    return <div className="about-card" ref={divRef} onMouseMove={handleMouseMove}>
        <h2>Our <span>Mission</span></h2>
        <p>To bridge the gap between lecture halls and industry floors. We don't just study robotics; we engineer the future. We build, we break, we innovate.</p>
    </div>
}