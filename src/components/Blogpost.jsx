import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Contenido completo de los artículos
const blogArticles = {
    'significado-el-loco': {
        title: "¿Qué significa El Loco en el Tarot?",
        image: "/cards/0_TheFool.jpg",
        date: "2025-01-15",
        category: "Significados",
        content: [
            {
                type: "paragraph",
                text: "El Loco es la carta número 0 del tarot, y representa el inicio de un viaje, tanto literal como metafórico. Es la carta de los nuevos comienzos, la inocencia y la fe ciega en el universo."
            },
            {
                type: "heading",
                text: "Simbolismo de la carta"
            },
            {
                type: "paragraph",
                text: "En la mayoría de los mazos, El Loco aparece como un joven viajero al borde de un precipicio, con una pequeña mochila y un perro a su lado. Este simbolismo es profundo:"
            },
            {
                type: "list",
                items: [
                    "El precipicio: Representa lo desconocido y los riesgos que tomamos",
                    "La mochila: Simboliza las pocas posesiones materiales que necesitamos",
                    "El perro: Representa nuestros instintos y la protección divina",
                    "La mirada al cielo: Muestra fe y conexión espiritual"
                ]
            },
            {
                type: "heading",
                text: "Significado en una lectura"
            },
            {
                type: "paragraph",
                text: "Cuando El Loco aparece en tu lectura, el universo te está diciendo que es momento de dar un salto de fe. Puede indicar:"
            },
            {
                type: "list",
                items: [
                    "Un nuevo proyecto o aventura",
                    "Un cambio importante en tu vida",
                    "La necesidad de confiar más en ti misma",
                    "Dejar ir el miedo y abrazar lo desconocido"
                ]
            },
            {
                type: "paragraph",
                text: "Recuerda: El Loco no es imprudente, es valiente. Confía en tu intuición y da ese primer paso. ✨"
            }
        ]
    },
    'como-prepararte-lectura-tarot': {
        title: "Cómo prepararte para una lectura de Tarot",
        image: "/cards/2_Sacerdotiza.jpg",
        date: "2025-01-10",
        category: "Consejos",
        content: [
            {
                type: "paragraph",
                text: "Una lectura de tarot es más efectiva cuando llegas con la mente clara y el corazón abierto. Aquí te comparto mis mejores consejos para prepararte."
            },
            {
                type: "heading",
                text: "Antes de la sesión"
            },
            {
                type: "list",
                items: [
                    "Medita por 5-10 minutos para calmar tu mente",
                    "Anota las preguntas que quieras hacer",
                    "Evita llegar con expectativas rígidas",
                    "Estate en un lugar tranquilo durante la lectura"
                ]
            },
            {
                type: "heading",
                text: "Durante la lectura"
            },
            {
                type: "paragraph",
                text: "Mantén tu mente abierta y no te cierres a las respuestas. A veces el tarot nos dice lo que necesitamos escuchar, no lo que queremos oír."
            },
            {
                type: "heading",
                text: "Después de la sesión"
            },
            {
                type: "paragraph",
                text: "Tómate un tiempo para reflexionar sobre los mensajes recibidos. Anótalos en un diario y observa cómo se manifiestan en tu vida. 🌙"
            }
        ]
    },
    'arcanos-mayores-guia': {
        title: "Los Arcanos Mayores: Guía básica",
        image: "/cards/17_TheStar.jpg",
        date: "2025-01-05",
        category: "Guías",
        content: [
            {
                type: "paragraph",
                text: "Los Arcanos Mayores son las 22 cartas más poderosas del tarot. Representan grandes eventos, lecciones de vida y arquetipos universales."
            },
            {
                type: "heading",
                text: "¿Qué son los Arcanos Mayores?"
            },
            {
                type: "paragraph",
                text: "A diferencia de los Arcanos Menores que hablan de eventos cotidianos, los Arcanos Mayores representan momentos significativos y transformadores en nuestras vidas."
            },
            {
                type: "heading",
                text: "El viaje del Loco"
            },
            {
                type: "paragraph",
                text: "Las 22 cartas cuentan la historia del viaje del Loco a través de la vida, desde la inocencia (El Loco) hasta la realización completa (El Mundo)."
            },
            {
                type: "list",
                items: [
                    "0-7: Las primeras lecciones de vida",
                    "8-14: Desafíos y crecimiento personal",
                    "15-21: Transformación espiritual y completitud"
                ]
            },
            {
                type: "paragraph",
                text: "Cada carta tiene su propia energía y mensaje. Con el tiempo, aprenderás a reconocer sus voces únicas. 🌟"
            }
        ]
    }
};

function BlogPost() {
    const { slug } = useParams();
    const article = blogArticles[slug];

    // Si el artículo no existe
    if (!article) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Artículo no encontrado</h1>
                    <Link
                        to="/blog"
                        className="text-purple-600 hover:text-purple-800 font-semibold"
                    >
                        ← Volver al blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Imagen de cabecera */}
            <div className="relative h-96 overflow-hidden bg-gradient-to-b from-purple-100 to-pink-100">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40"></div>
            </div>

            {/* Contenido del artículo */}
            <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
                {/* Card del título */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
                    {/* Categoría y fecha */}
                    <div className="flex items-center gap-4 mb-4">
                        <Link
                            to="/blog"
                            className="text-purple-600 hover:text-purple-800 font-semibold text-sm flex items-center"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Volver al blog
                        </Link>
                        <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">
                            {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.date}</span>
                    </div>

                    {/* Título */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        {article.title}
                    </h1>

                    {/* Contenido */}
                    <div className="prose prose-lg max-w-none">
                        {article.content.map((block, index) => {
                            switch (block.type) {
                                case 'heading':
                                    return (
                                        <h2 key={index} className="text-2xl font-bold text-purple-700 mt-8 mb-4">
                                            {block.text}
                                        </h2>
                                    );
                                case 'paragraph':
                                    return (
                                        <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                            {block.text}
                                        </p>
                                    );
                                case 'list':
                                    return (
                                        <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                                            {block.items.map((item, i) => (
                                                <li key={i} className="ml-4">{item}</li>
                                            ))}
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>

                {/* Call to action */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center mb-12">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">
                        ¿Quieres una lectura personalizada?
                    </h3>
                    <p className="text-gray-700 mb-6">
                        Agenda tu sesión de tarot y descubre lo que el universo tiene para ti
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Contactar ahora
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;