import { useRef } from 'react';
import './MemberCard.css';
import daNigga from "../../../assets/daNigga.png"




export default function MemberCard({img=daNigga,name="da Nigga",title="our nigga"}) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        
        // 1. Where is the mouse relative to the card?
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;

        // 2. Find the center
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // 3. Calculate rotation
        // Dividing by 10 or 20 controls the intensity of the tilt
        const rotateX = (centerY - y) / 10; 
        const rotateY = (x - centerX) / 10;

        // 4. Apply the transform
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        // Reset the card when the mouse leaves
        if (cardRef.current) {
            cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }
    };

    return (
        <div 
            ref={cardRef}
            className="member-card" 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="img-container">
                <img src={img} alt={name} />
            </div>
            <h4>{name}</h4>
            <p>{title}</p>
        </div>
    );
}

