import React from 'react';
import pleyadian from '../assets/pleyadian01.jpg';

function DataContainer() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">

            {/* 🎥 Fondo de video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
            >
                <source src="/videos/Video.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
            </video>

            {/* 🌫️ Capa de contenido transparente */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
                <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-10 md:p-16 max-w-5xl w-full transition duration-500 text-center text-gray-900">

                    <h2 className="text-5xl mb-8 text-purple-700 tracking-widest font-cinzel drop-shadow-xl text-center transition duration-300">
                        ✨ PLEYADIAN TAROT ✨
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Imagen */}
                        <div className="flex justify-center">
                            <img
                                src={pleyadian}
                                alt="pleyadian"
                                className="h-72 w-72 rounded-full object-cover border-4 border-purple-300 hover:scale-105 transition duration-300 shadow-lg"
                            />
                        </div>

                        {/* Texto */}
                        <div className="text-lg md:text-xl font-mulish text-gray-800 space-y-4">
                            <p>
                                🌠 <strong>Pleyadian Tarot</strong> es un proyecto creado con amor y conexión,
                                donde el tarot se convierte en una herramienta para el autoconocimiento,
                                la manifestación y la toma de decisiones.
                            </p>
                            <p>
                                Bienvenid@ a este espacio donde la intuición, la energía y la sabiduría de
                                las cartas se unen para brindarte claridad, guía y nuevas posibilidades.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DataContainer;

