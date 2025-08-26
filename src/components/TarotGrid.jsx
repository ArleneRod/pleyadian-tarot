import React, { useState, useEffect } from 'react';
import TarotCard from './TarotCard';

// Datos embebidos directamente
const predictions = [
    { "id": 0, "name": "The Fool", "image": "0_TheFool.jpg", "prediction": "Un nuevo comienzo te espera. Mantente abierto a nuevas oportunidades." },
    { "id": 1, "name": "The Magician", "image": "1_TheMagician.jpg", "prediction": "Tienes todas las herramientas para manifestar tus deseos." },
    { "id": 2, "name": "The High Priestess", "image": "2_Sacerdotiza.jpg", "prediction": "Una mujer sabia, puedes ser tu o una mujer cercana a ti que te dara buenos consejos. Se recomienda escuchar su intuicion y prestar atencion a sus sueños" },
    { "id": 3, "name": "The Empress", "image": "3_TheEmpress.jpg", "prediction": "Dia lleno de abundancia, fertilidad , podrias conocer a una mujer importante" },
    { "id": 4, "name": "The Emperor", "image": "4_TheEmperor.jpg", "prediction": "Podrias lidiar con un hombre altanero y obstinado" },
    { "id": 5, "name": "The Hierophant", "image": "5_TheHierophant.jpg", "prediction": "Un dia tranquilo, preocupada por el que diran y hacer lo correcto" },
    { "id": 6, "name": "The Lovers", "image": "6_TheLovers.jpg", "prediction": "Estas pensando en dos personas y no sabes a quien elegir." },
    { "id": 7, "name": "The Chariot", "image": "7_TheChariot.jpg", "prediction": "Avances, podrias emprender un viaje o ir a algun sitio lejano" },
    { "id": 8, "name": "Strength", "image": "8_Strength.jpg", "prediction": "Mucha fuerza para realizar tus actividades del dia de hoy, te estas conteniendo en algo?" },
    { "id": 9, "name": "The Hermit", "image": "9_TheHermit.jpg", "prediction": "Un dia tranquilo, para pensar, esperar algo o alguien?" },
    { "id": 10, "name": "The Wheel of Fortune", "image": "10_WheelofFortune.jpg", "prediction": "El dia de hoy puede ser muy diferente a la rutina que estas acostumbrada" },
    { "id": 11, "name": "Justice", "image": "11_Justice.jpg", "prediction": "Hiciste algo bueno ultimamente? Hoy puede ser reconocido lo mismo si hiciste algo malo" },
    { "id": 12, "name": "The Hanged Man", "image": "12_TheHangedMan.jpg", "prediction": "Un dia aburrido, con proyectos pausados o pequeno desequilibrio mental" },
    { "id": 13, "name": "The Death", "image": "13_Death.jpg", "prediction": "Cambios? Puede ser que renueves tu closet o que te boten del trabajo" },
    { "id": 14, "name": "Temperance", "image": "14_Temperance.jpg", "prediction": "Te llegara un whatsapp de quien estas pensando" },
    { "id": 15, "name": "The Devil", "image": "15_TheDevil.jpg", "prediction": "Buen dia para pensar solo en ti y nadie mas que en ti" },
    { "id": 16, "name": "The Tower", "image": "16_TheTower.jpg", "prediction": "Discucion incomoda" },
    { "id": 17, "name": "The Star", "image": "17_TheStar.jpg", "prediction": "Un dia con muchos proyectos y buenas vibras" },
    { "id": 18, "name": "The Moon", "image": "18_TheMoon.jpg", "prediction": "Alguien te tiene celos " },
    { "id": 19, "name": "The Sun", "image": "19_TheSun.jpg", "prediction": "Hoy brillas, ponte ese vestido y sal a conquistar el mundo" },
    { "id": 20, "name": "Judgement", "image": "20_Judgement.jpg", "prediction": "Muchas cosas por hacer, talvez aparezca tu ex para invitarte a comer" },
    { "id": 21, "name": "The World", "image": "21_TheWorld.jpg", "prediction": "Quieres irte de viaje, hoy es un buen dia , tambien mucho trabajo" }
];

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
                                    src={`/cards/${selectedCard.image}`}  // Cambiado: ahora desde public/cards/
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