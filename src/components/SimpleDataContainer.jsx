import React from 'react';
import { Link } from 'react-router-dom';

function SimpleDataContainer() {
    const handleWhatsAppClick = (service, price) => {
        const message = `Hola! Me interesa el servicio de ${service} (${price} soles). ¿Podrías darme más información? 🔮`;
        const whatsappUrl = `https://wa.me/51987698897?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="container mx-auto px-4 py-12 max-w-6xl" id="servicios">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">✨ Nuestros Servicios ✨</h2>
                <p className="text-xl text-gray-600">Descubre lo que el universo tiene preparado para ti</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 - Promo Flash */}
                <article className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-xl p-8 border border-pink-300 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-center">
                        <div className="text-5xl mb-4" role="img" aria-label="Rayo">⚡</div>
                        <h3 className="text-2xl font-bold mb-6 text-pink-800">Promo Flash</h3>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white/70 rounded-lg p-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">💫 1 pregunta</span>
                                    <span className="text-2xl font-bold text-pink-600">S/ 15</span>
                                </div>
                            </div>
                            <div className="bg-white/70 rounded-lg p-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">🌟 3 preguntas</span>
                                    <span className="text-2xl font-bold text-pink-600">S/ 40</span>
                                </div>
                            </div>
                            <div className="bg-white/70 rounded-lg p-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">✨ 5 preguntas</span>
                                    <span className="text-2xl font-bold text-pink-600">S/ 55</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-pink-50 rounded-lg p-3 mb-4">
                            <p className="text-sm text-pink-700 font-medium">🎤 Se realiza por audios de WhatsApp</p>
                            <p className="text-xs text-pink-600 mt-1">Respuesta en menos de 24 horas</p>
                        </div>

                        <button
                            onClick={() => handleWhatsAppClick('Promo Flash', '15-55')}
                            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 w-full"
                            aria-label="Contactar por WhatsApp para Promo Flash"
                        >
                            💌 Contactar Ahora
                        </button>
                    </div>
                </article>

                {/* Card 2 - Sesiones en Video */}
                <article className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl shadow-xl p-8 border border-yellow-300 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-center">
                        <div className="text-5xl mb-4" role="img" aria-label="Videocámara">🎥</div>
                        <h3 className="text-2xl font-bold mb-6 text-yellow-800">Sesiones en Videollamada</h3>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white/70 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">⏰ Media hora</span>
                                    <span className="text-2xl font-bold text-yellow-600">S/ 80</span>
                                </div>
                                <p className="text-xs text-gray-600 mt-2">Ideal para consultas específicas</p>
                            </div>
                            <div className="bg-white/70 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">🕐 1 hora completa</span>
                                    <span className="text-2xl font-bold text-yellow-600">S/ 140</span>
                                </div>
                                <p className="text-xs text-gray-600 mt-2">Lectura profunda y detallada</p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-yellow-700 font-medium">🔹 Sesión personalizada en vivo</p>
                            <p className="text-xs text-yellow-600 mt-1">Conexión directa con tu energía</p>
                            <p className="text-xs text-yellow-600">Por WhatsApp Video o Google Meet</p>
                        </div>

                        <button
                            onClick={() => handleWhatsAppClick('Videollamada', '80-140')}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 w-full"
                            aria-label="Reservar sesión por videollamada"
                        >
                            📞 Reservar Sesión
                        </button>
                    </div>
                </article>

                {/* Card 3 - Contacto */}
                <article className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-xl p-8 border border-purple-300 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-center">
                        <div className="text-5xl mb-4" role="img" aria-label="Chat">💬</div>
                        <h3 className="text-2xl font-bold mb-6 text-purple-800">¿Necesitas más info?</h3>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white/70 rounded-lg p-4">
                                <p className="text-gray-700 font-medium mb-2">🌙 Consultas personalizadas</p>
                                <p className="text-sm text-gray-600">Cada lectura es única para ti</p>
                            </div>
                            <div className="bg-white/70 rounded-lg p-4">
                                <p className="text-gray-700 font-medium mb-2">🔮 Tarot profesional</p>
                                <p className="text-sm text-gray-600">Años de experiencia</p>
                            </div>
                            <div className="bg-white/70 rounded-lg p-4">
                                <p className="text-gray-700 font-medium mb-2">💫 Atención rápida</p>
                                <p className="text-sm text-gray-600">Respuesta en pocas horas</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4 mb-4">
                            <p className="text-lg font-bold text-gray-800">✉️ Escríbeme para más información</p>
                            <p className="text-sm text-gray-600 mt-1">Te ayudo a elegir la mejor opción</p>
                        </div>

                        <Link
                            to="/contacto"
                            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center w-full"
                            aria-label="Ir a página de contacto"
                        >
                            💌 Contáctame Ahora
                        </Link>
                    </div>
                </article>
            </div>

            {/* Sección adicional con testimonios implícitos */}
            <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">🌟 ¿Por qué elegir Pleyadian Tarot? 🌟</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="text-center p-4">
                            <div className="text-4xl mb-3">🎯</div>
                            <h4 className="font-semibold text-gray-800 mb-2">Precisión</h4>
                            <p className="text-sm text-gray-600">Lecturas certeras basadas en tu energía actual</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl mb-3">💖</div>
                            <h4 className="font-semibold text-gray-800 mb-2">Empatía</h4>
                            <p className="text-sm text-gray-600">Te escucho sin juzgar, con calidez y comprensión</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl mb-3">🔒</div>
                            <h4 className="font-semibold text-gray-800 mb-2">Confidencialidad</h4>
                            <p className="text-sm text-gray-600">Tu privacidad es sagrada y protegida</p>
                        </div>
                    </div>
                    <div className="mt-8 bg-white/50 rounded-lg p-6 max-w-2xl mx-auto">
                        <p className="text-gray-700 italic">
                            "El tarot no predice el futuro fijo, es una brújula que te muestra posibilidades
                            y te ayuda a tomar mejores decisiones. Estoy aquí para guiarte." - Astrid
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SimpleDataContainer;