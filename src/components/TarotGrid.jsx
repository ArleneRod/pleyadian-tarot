import React, { useState, useEffect } from 'react';
import TarotCard from './TarotCard';

// Datos embebidos directamente
const predictions = [
    { "id": 0, "name": "The Fool", "image": "0_TheFool.jpg", "prediction": "Hoy se abre un nuevo capítulo para ti. No tengas miedo de dar el primer paso, aunque no sepas cómo terminará. Mantente abierta a las sorpresas del día." },
    { "id": 1, "name": "The Magician", "image": "1_TheMagician.jpg", "prediction": "Tienes más poder del que crees. Si te enfocas, podrás transformar una idea en algo real. Hoy confía en tus talentos." },
    { "id": 2, "name": "The High Priestess", "image": "2_Sacerdotiza.jpg", "prediction": "Tu intuición está fuerte. Quizás recibas un consejo valioso de una mujer cercana, o simplemente tu voz interior te guíe. Escúchala con atención." },
    { "id": 3, "name": "The Empress", "image": "3_TheEmpress.jpg", "prediction": "La energía de la abundancia te rodea. Puede ser un día fértil para tus ideas, proyectos o relaciones. También podrías cruzarte con alguien muy especial." },
    { "id": 4, "name": "The Emperor", "image": "4_TheEmperor.jpg", "prediction": "Hoy puede aparecer una figura fuerte y dominante en tu camino. Aprende de su seguridad, pero no dejes que su terquedad opaque tu voz." },
    { "id": 5, "name": "The Hierophant", "image": "5_TheHierophant.jpg", "prediction": "Un día tranquilo, en el que quizá quieras hacer lo correcto o seguir lo establecido. No te preocupes tanto por el qué dirán, sé fiel a ti misma." },
    { "id": 6, "name": "The Lovers", "image": "6_TheLovers.jpg", "prediction": "Hay decisiones del corazón que te rondan la cabeza. Tal vez pienses en dos personas o en dos caminos distintos. Escucha lo que realmente sientes." },
    { "id": 7, "name": "The Chariot", "image": "7_TheChariot.jpg", "prediction": "La vida te impulsa hacia adelante. Puede ser un viaje, un traslado o simplemente un gran avance personal. Aprovecha esa energía de movimiento." },
    { "id": 8, "name": "Strength", "image": "8_Strength.jpg", "prediction": "Hoy tienes la fuerza para enfrentar lo que venga. Tal vez estés conteniendo emociones o situaciones… recuerda que tu calma es tu poder." },
    { "id": 9, "name": "The Hermit", "image": "9_TheHermit.jpg", "prediction": "Un día más introspectivo. Puede que prefieras estar tranquila, reflexionando o esperando algo importante. No tengas miedo al silencio, trae claridad." },
    { "id": 10, "name": "The Wheel of Fortune", "image": "10_WheelofFortune.jpg", "prediction": "La rutina se rompe y algo inesperado aparece. Prepárate para giros en el día, pueden ser pequeños o grandes, pero todos traen aprendizajes." },
    { "id": 11, "name": "Justice", "image": "11_Justice.jpg", "prediction": "Hoy podrías ver las consecuencias de tus actos recientes. Si sembraste algo bueno, la recompensa llega; si no, es un buen momento para reflexionar." },
    { "id": 12, "name": "The Hanged Man", "image": "12_TheHangedMan.jpg", "prediction": "Un día que puede sentirse lento o pausado. Si algo se retrasa, tómalo como una oportunidad para ver las cosas desde otro ángulo." },
    { "id": 13, "name": "The Death", "image": "13_Death.jpg", "prediction": "Se acerca un cambio necesario. Puede ser algo pequeño, como renovar tu estilo, o algo más grande que cierre una etapa. Dale la bienvenida a lo nuevo." },
    { "id": 14, "name": "Temperance", "image": "14_Temperance.jpg", "prediction": "La armonía toca tu puerta. Quizás recibas un mensaje que estabas esperando o una señal que te dé paz. Fluye sin forzar nada." },
    { "id": 15, "name": "The Devil", "image": "15_TheDevil.jpg", "prediction": "Un día para enfocarte en ti misma sin culpa. Date un gusto, piensa en lo que quieres y no en lo que esperan los demás." },
    { "id": 16, "name": "The Tower", "image": "16_TheTower.jpg", "prediction": "Podría surgir una conversación fuerte o un momento incómodo. Aunque no lo parezca, a veces lo que se derrumba abre espacio a algo mejor." },
    { "id": 17, "name": "The Star", "image": "17_TheStar.jpg", "prediction": "Hoy brillas con esperanza y creatividad. Es un buen momento para soñar, planear y confiar en que lo que deseas se acerca." },
    { "id": 18, "name": "The Moon", "image": "18_TheMoon.jpg", "prediction": "No todo es lo que parece. Puede que alguien sienta celos o haya malentendidos. Confía más en lo que sientes que en lo que escuchas." },
    { "id": 19, "name": "The Sun", "image": "19_TheSun.jpg", "prediction": "Brillas con energía y alegría. Ponte guapa, sonríe y disfruta del día. Hoy tienes el poder de contagiar optimismo a los demás." },
    { "id": 20, "name": "Judgement", "image": "20_Judgement.jpg", "prediction": "Varias cosas reclaman tu atención. Puede que reaparezca alguien de tu pasado, incluso un ex. Tómalo como una oportunidad para ver cuánto has cambiado." },
    { "id": 21, "name": "The World", "image": "21_TheWorld.jpg", "prediction": "Sientes ganas de viajar o de cerrar un ciclo. Si no lo haces hoy, muy pronto llegará esa oportunidad de moverte y celebrar tus logros." }
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