import React from 'react';
import { Link } from 'react-router-dom';

function SimpleDataContainer() {
    // Función para manejar click y dirigir a contacto
    const handleContactClick = (service) => {
        // Aquí puedes cambiar por tu página de contacto real
        // Por ejemplo: window.location.href = '/contacto';
        // O usando React Router: navigate('/contacto');
        alert(`¡Perfecto! Te contactaremos sobre: ${service}`);
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">✨ Nuestros Servicios ✨</h2>
                <p className="text-xl text-gray-600">Descubre lo que el universo tiene preparado para ti</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 - Promo Flash */}
                <div
                    className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-xl p-8 border border-pink-300 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl"
                    onClick={() => handleContactClick('Promo Flash')}
                >
                    <div className="text-center">
                        <div className="text-5xl mb-4">⚡</div>
                        <h3 className="text-2xl font-bold mb-6 text-pink-800">Promo Flash</h3>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white/70 rounded-lg p-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">💫 1 pregunta</span>
                                    <span className="text-2xl font-bold text-pink-600">15 soles</span>
                                </div>
                            </div>
                            <div className="bg-white/70 rounded-lg p-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">🌟 3 preguntas</span>
                                    <span className="text-2xl font-bold text-pink-600">40 soles</span>
                                </div>
                            </div>
                            <div className="bg-white/70 rounded-lg p-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">✨ 5 preguntas</span>
                                    <span className="text-2xl font-bold text-pink-600">55 soles</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-pink-50 rounded-lg p-3 mb-4">
                            <p className="text-sm text-pink-700 font-medium">🎤 Se realiza por audios</p>
                        </div>

                        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                            💌 Contactar Ahora
                        </button>
                    </div>
                </div>

                {/* Card 2 - Sesiones en Video */}
                <div
                    className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl shadow-xl p-8 border border-yellow-300 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl"
                    onClick={() => handleContactClick('Videollamada')}
                >
                    <div className="text-center">
                        <div className="text-5xl mb-4">🎥</div>
                        <h3 className="text-2xl font-bold mb-6 text-yellow-800">Sesiones en Videollamada</h3>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white/70 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">⏰ Media hora</span>
                                    <span className="text-2xl font-bold text-yellow-600">80 soles</span>
                                </div>
                            </div>
                            <div className="bg-white/70 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">🕐 1 hora completa</span>
                                    <span className="text-2xl font-bold text-yellow-600">140 soles</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-yellow-700 font-medium">📹 Sesión personalizada en vivo</p>
                            <p className="text-xs text-yellow-600 mt-1">Conexión directa con tu energía</p>
                        </div>

                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                            📞 Reservar Sesión
                        </button>
                    </div>
                </div>

                {/* Card 3 - Contacto */}
                <div
                    className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl p-8 border border-gray-300 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl"
                    onClick={() => handleContactClick('Más información')}
                >
                    <div className="text-center">
                        <div className="text-5xl mb-4">💬</div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">¿Necesitas más info?</h3>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white/70 rounded-lg p-4">
                                <p className="text-gray-700 font-medium mb-2">🌙 Consultas personalizadas</p>
                                <p className="text-sm text-gray-600">Cada lectura es única para ti</p>
                            </div>
                            <div className="bg-white/70 rounded-lg p-4">
                                <p className="text-gray-700 font-medium mb-2">🔮 Diferentes métodos</p>
                                <p className="text-sm text-gray-600">Tarot, numerología y más</p>
                            </div>
                            <div className="bg-white/70 rounded-lg p-4">
                                <p className="text-gray-700 font-medium mb-2">💫 Atención 24/7</p>
                                <p className="text-sm text-gray-600">Respuesta rápida garantizada</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-lg p-4 mb-4">
                            <p className="text-lg font-bold text-gray-800">✉️ Escríbeme para más información</p>
                            <p className="text-sm text-gray-600 mt-1">Te ayudo a elegir la mejor opción</p>
                        </div>

                        <Link
                            to="/contacto"
                            className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center"
                        >
                            💌 Contáctame Ahora
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sección adicional */}
            <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-pink-50 via-yellow-50 to-gray-50 rounded-2xl p-8 shadow-lg">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">🌟 ¿Por qué elegir nuestras lecturas? 🌟</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            <div className="text-center">
                                <div className="text-3xl mb-2 opacity-30 filter grayscale">🎯</div>
                                <h5 className="font-semibold text-gray-800">Precisión</h5>
                                <p className="text-sm text-gray-600">Lecturas certeras y detalladas</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2 opacity-30 filter grayscale">💖</div>
                                <h5 className="font-semibold text-gray-800">Empatía</h5>
                                <p className="text-sm text-gray-600">Comprendo tu situación</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2 opacity-30 filter grayscale">🔒</div>
                                <h5 className="font-semibold text-gray-800">Confidencialidad</h5>
                                <p className="text-sm text-gray-600">Tu privacidad es sagrada</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SimpleDataContainer;