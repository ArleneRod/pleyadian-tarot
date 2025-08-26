import React from 'react';

function TarotCard({ card, isFlipped, onCardClick }) {
    return (
        <div
            className="w-32 h-48 perspective cursor-pointer"
            onClick={() => onCardClick(card.id)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>

                {/* Reverso diseñado con CSS en lugar de imagen */}
                <div
                    className={`absolute w-full h-full rounded-lg backface-hidden border-2 border-amber-400 shadow-lg ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 25%, #581c87 50%, #7c2d12 75%, #92400e 100%)'
                    }}
                >
                    {/* Borde interior ornamental */}
                    <div className="absolute inset-2 border-2 border-amber-300 rounded opacity-80">
                        <div className="absolute inset-2 border border-amber-200 rounded opacity-60"></div>
                    </div>

                    {/* Diseño central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            {/* Círculo central */}
                            <div className="w-12 h-12 border-3 border-amber-300 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-200 to-amber-400 shadow-lg">
                                <div className="text-purple-800 text-xl font-bold">✧</div>
                            </div>

                            {/* Decoraciones alrededor */}
                            <div className="absolute -top-1 -left-1 text-amber-300 text-sm">✦</div>
                            <div className="absolute -top-1 -right-1 text-amber-300 text-sm">✦</div>
                            <div className="absolute -bottom-1 -left-1 text-amber-300 text-sm">✦</div>
                            <div className="absolute -bottom-1 -right-1 text-amber-300 text-sm">✦</div>
                        </div>
                    </div>

                    {/* Esquinas decorativas */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-300 opacity-80"></div>
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-300 opacity-80"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-300 opacity-80"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-300 opacity-80"></div>

                    {/* Texto decorativo */}
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                        <div className="text-amber-200 text-xs font-semibold opacity-70">
                           PLEYADIAN
                        </div>
                    </div>
                </div>

                {/* Frente de la carta */}
                <img
                    src={`/cards/${card.image}`}
                    alt="front of card"
                    className={`absolute w-full h-full rounded-lg backface-hidden transform rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
        </div>
    );
}

export default TarotCard;
