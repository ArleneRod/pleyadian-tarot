import React from 'react';
import pleyadian from '../assets/pleyadian01.jpg';

function DataContainer() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">

            {/* Fondo de video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
            >
                <source src="/videos/Video.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
            </video>

            {/* Overlay con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-indigo-900/40 z-5"></div>

            {/* Capa de contenido */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
                <div className="bg-gradient-to-br from-white/70 via-purple-50/70 to-pink-100/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 max-w-6xl w-full transition-all duration-500 hover:shadow-purple-500/50 hover:scale-[1.02] border-2 border-purple-200/50">

                    <h2 className="text-5xl md:text-6xl mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 tracking-wider font-cinzel drop-shadow-2xl text-center transition duration-300 font-bold animate-pulse">
                        PLEYADIAN TAROT
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Imagen con efectos */}
                        <div className="flex justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                            <img
                                src={pleyadian}
                                alt="pleyadian"
                                className="relative h-80 w-80 rounded-full object-cover border-8 border-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50 hover:rotate-3"
                                style={{
                                    borderImage: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1) 1'
                                }}
                            />
                        </div>

                        {/* Texto con diseño mejorado */}
                        <div className="text-lg md:text-xl font-mulish text-gray-800 space-y-6">
                            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:scale-105 transition-all duration-300">
                                <p className="leading-relaxed">
                                    <strong className="text-purple-700 text-2xl">Pleyadian Tarot</strong> es un proyecto creado con amor y conexión,
                                    donde el tarot se convierte en una herramienta para el autoconocimiento,
                                    la manifestación y la toma de decisiones.
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-pink-100 to-indigo-100 p-6 rounded-2xl shadow-lg border-l-4 border-pink-500 hover:scale-105 transition-all duration-300">
                                <p className="leading-relaxed">
                                    Bienvenido a este espacio donde la intuición, la energía y la sabiduría de
                                    las cartas se unen para brindarte <strong className="text-pink-600">claridad, guía y nuevas posibilidades</strong>.
                                </p>
                            </div>

                            {/* Elementos decorativos */}
                            <div className="flex justify-center gap-4 pt-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg animate-bounce"></div>
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-indigo-400 rounded-full shadow-lg animate-bounce delay-100"></div>
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full shadow-lg animate-bounce delay-200"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DataContainer;

