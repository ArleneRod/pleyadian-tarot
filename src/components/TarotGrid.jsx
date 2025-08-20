import React, { useState, useEffect } from 'react';
import TarotCard from './TarotCard';
import predictions from '../data/predictions.json';

function TarotGrid() {
    const [shuffledCards, setShuffledCards] = useState([]);
    const [selectedCardId, setSelectedCardId] = useState(null);

    // Barajar cartas al cargar
    useEffect(() => {
        const shuffled = [...predictions].sort(() => Math.random() - 0.5);
        setShuffledCards(shuffled);
    }, []);

    // Manejar click en carta
    const handleCardClick = (cardId) => {
        setSelectedCardId(cardId);
    };

    // Cerrar predicción y voltear carta
    const handleCloseCard = () => {
        setSelectedCardId(null);
    };

    // Barajar cartas manualmente
    const shuffleCards = () => {
        setSelectedCardId(null);
        const shuffled = [...predictions].sort(() => Math.random() - 0.5);
        setShuffledCards(shuffled);
    };

    const selectedCard = shuffledCards.find(card => card.id === selectedCardId);

    return (
        <div className="bg-gradient-to-b from-white via-rose-50 to-yellow-50 min-h-screen text-black flex flex-col items-center justify-center px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-pacifico text-pink-600 text-center drop-shadow-lg mb-8 transition duration-300 hover:scale-105">
                Elige tu carta del día
            </h1>

            <p className="text-lg md:text-xl font-mulish text-center text-gray-700 max-w-2xl mb-6">
                ¿Qué carta tiene un mensaje para ti hoy?
                Respira profundo, siente tu intuición... y haz clic en la carta que te llame
            </p>

            {/* Botón para barajar */}
            <button
                onClick={shuffleCards}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full mb-8 transition-all duration-300 transform hover:scale-105"
            >
                Barajar Cartas
            </button>

            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-7xl">
                {/* Grid de cartas */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-items-center">
                    {shuffledCards.map((card) => (
                        <TarotCard
                            key={card.id}
                            card={card}
                            isFlipped={card.id === selectedCardId}
                            onCardClick={handleCardClick}
                        />
                    ))}
                </div>

                {/* Panel de predicción */}
                {selectedCard && (
                    <div className="lg:w-80 w-full">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-pink-200">
                            <div className="text-center mb-4">
                                <img
                                    src={`/src/assets/cards/${selectedCard.image}`}
                                    alt={selectedCard.name}
                                    className="w-32 h-48 mx-auto rounded-lg shadow-lg mb-4"
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-center text-pink-600">
                                {selectedCard.name}
                            </h3>

                            <div className="bg-pink-50 rounded-lg p-4 mb-4">
                                <h4 className="font-semibold mb-2 text-pink-800">Tu predicción:</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    {selectedCard.prediction}
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleCloseCard}
                                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                                >
                                    Cerrar
                                </button>

                                <button
                                    onClick={shuffleCards}
                                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all"
                                >
                                    Nueva Tirada
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TarotGrid;