import React from 'react';
import Astrid from '../assets/Astrid2.jpg';

function DataContainer_2() {
    return (
        <div className="w-full bg-gradient-to-br from-white via-purple-50 to-pink-100 py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-white shadow-xl rounded-3xl p-10 md:p-16 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
                    <h2 className="text-3xl mb-8 text-center text-purple-700 tracking-wide font-pacifico hover:text-pink-500 transition duration-300">
                        🌙 🌟 Tarotista  🌟 🃏
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Imagen de Astrid con efecto */}
                        <div className="flex justify-center">
                            <img
                                src={Astrid}
                                alt="Astrid"
                                className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-purple-300 hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Texto bonito */}
                        <div className="text-gray-800 text-lg leading-relaxed space-y-4">
                            <p>✨ Hola, soy <strong>Astrid</strong>.</p>
                            <p>
                                El tarot llegó a mi vida como una herramienta hermosa que me ayuda
                                a entender mejor lo que me pasa y a encontrar respuestas cuando más
                                las necesito.
                            </p>
                            <p>
                                Con el tiempo, me di cuenta de que también podía ser útil para otros.
                                Para mí, una tarotista es como una amiga confiable: alguien que te escucha
                                sin juzgar y te ayuda a ver las cosas desde otra perspectiva.
                            </p>
                            <p>
                                A veces, es un poco como una <em>psicóloga intuitiva</em> que te guía con cariño,
                                pero siempre dejándote el poder de decidir tu propio camino.
                            </p>
                            <p>
                                🌠 Creo que las cosas pueden cambiar si hacemos las preguntas correctas.
                                El tarot no es un destino fijo, sino una brújula que nos muestra las posibilidades.
                            </p>
                            <p>
                                Si necesitas claridad, un consejo o simplemente alguien con quien hablar de lo que sientes...
                                <span className="text-purple-600 font-semibold"> aquí estoy ✨</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataContainer_2;
