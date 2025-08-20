import React from 'react';
import backImage from '../assets/reverse.jpg';


function TarotCard({ card, isFlipped, onCardClick }) {
    return (
        <div
            className="w-32 h-48 perspective cursor-pointer"
            onClick={() => onCardClick(card.id)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                <img
                    src={backImage}
                    alt="back of card"
                    className={`absolute w-full h-full rounded-lg backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                    src={`/src/assets/cards/${card.image}`}
                    alt="front of card"
                    className={`absolute w-full h-full rounded-lg backface-hidden transform rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
        </div>
    );
}

export default TarotCard;
