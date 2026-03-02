import { useRef } from "react";


export default function WhoWeAre({spotlightColor = 'rgba(255, 255, 255, 0.25)' }){


    const divRef = useRef(null);
    
        const handleMouseMove = e => {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    };


    return <div className=" whoWeAre about-card cursor-target" ref={divRef} onMouseMove={handleMouseMove}>
        <h2><span>Who</span> we are</h2>
        <p>
            Welcome to IEEE RAS UJ. Based at the University of Jordan, we are a community of innovators dedicated to the future of robotics. As part of the global IEEE network, we focus on empowering students through hands-on technical projects, workshops, and competitions. Whether it’s autonomous systems or industrial automation, we provide the tools to turn your designs into reality.
        </p>
    </div>
}