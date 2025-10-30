import React from 'react';
import Astrid from '../assets/Astrid2.jpg';

function DataContainer_2() {
    return (
        <div className="w-full bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 py-20 relative overflow-hidden">

            {/* Elementos decorativos de fondo */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 shadow-2xl rounded-3xl p-10 md:p-16 transition-all duration-500 hover:shadow-purple-400/30 hover:scale-[1.01] border-2 border-purple-200/50 backdrop-blur-sm">

                    <h2 className="text-4xl md:text-5xl mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 tracking-wide font-pacifico transition duration-300 font-bold">
                        Tarotista
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Imagen de Astrid con efectos mejorados */}
                        <div className="flex justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                            <div className="relative">
                                <img
                                    src={Astrid}
                                    alt="Astrid"
                                    className="rounded-full shadow-2xl w-72 h-72 object-cover border-8 hover:scale-110 transition-all duration-500 hover:rotate-6 hover:shadow-purple-400/50"
                                    style={{
                                        borderImage: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1) 1'
                                    }}
                                />
                                {/* Destellos decorativos */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full animate-ping"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
                            </div>
                        </div>

                        {/* Texto mejorado con tarjetas */}
                        <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-5">
                            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-2xl shadow-md border-l-4 border-purple-500 hover:scale-105 transition-all duration-300">
                                <p>Hola, soy <strong className="text-purple-700 text-xl">Astrid</strong>.</p>
                            </div>

                            <div className="bg-gradient-to-r from-pink-100 to-indigo-100 p-5 rounded-2xl shadow-md border-l-4 border-pink-500 hover:scale-105 transition-all duration-300">
                                <p>
                                    El tarot llegó a mi vida como una herramienta hermosa que me ayuda
                                    a entender mejor lo que me pasa y a encontrar respuestas cuando más
                                    las necesito.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-5 rounded-2xl shadow-md border-l-4 border-indigo-500 hover:scale-105 transition-all duration-300">
                                <p>
                                    Con el tiempo, me di cuenta de que también podía ser útil para otros.
                                    Para mí, una tarotista es como una <strong className="text-pink-600">amiga confiable</strong>: alguien que te escucha
                                    sin juzgar y te ayuda a ver las cosas desde otra perspectiva.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-2xl shadow-md border-l-4 border-purple-500 hover:scale-105 transition-all duration-300">
                                <p>
                                    A veces, es un poco como una <em className="text-indigo-600 font-semibold">psicóloga intuitiva</em> que te guía con cariño,
                                    pero siempre dejándote el poder de decidir tu propio camino.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-pink-100 to-indigo-100 p-5 rounded-2xl shadow-md border-l-4 border-pink-500 hover:scale-105 transition-all duration-300">
                                <p>
                                    Creo que las cosas pueden cambiar si hacemos las preguntas correctas.
                                    El tarot no es un destino fijo, sino una <strong className="text-purple-600">brújula que nos muestra las posibilidades</strong>.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg border-2 border-purple-400 hover:scale-105 transition-all duration-300 text-center">
                                <p className="font-semibold text-lg">
                                    Si necesitas claridad, un consejo o simplemente alguien con quien hablar de lo que sientes...
                                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-xl">aquí estoy</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataContainer_2;
