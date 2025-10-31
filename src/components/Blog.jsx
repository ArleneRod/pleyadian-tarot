import React from 'react';
import { Link } from 'react-router-dom';

// Artículos del blog (puedes agregar más fácilmente)
const blogPosts = [
    {
        id: 1,
        title: "¿Qué significa El Loco en el Tarot?",
        slug: "significado-el-loco",
        excerpt: "Descubre el significado profundo de la primera carta del tarot y cómo puede guiarte en nuevos comienzos.",
        image: "/cards/0_TheFool.jpg",
        date: "2025-01-15",
        category: "Significados"
    },
    {
        id: 2,
        title: "Cómo prepararte para una lectura de Tarot",
        slug: "como-prepararte-lectura-tarot",
        excerpt: "Tips esenciales para que tu sesión de tarot sea más efectiva y significativa.",
        image: "/cards/2_Sacerdotiza.jpg",
        date: "2025-01-10",
        category: "Consejos"
    },
    {
        id: 3,
        title: "Los Arcanos Mayores: Guía básica",
        slug: "arcanos-mayores-guia",
        excerpt: "Una introducción completa a las 22 cartas más poderosas del tarot y su simbolismo.",
        image: "/cards/17_TheStar.jpg",
        date: "2025-01-05",
        category: "Guías"
    }
];

function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white">
            {/* Header del Blog */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">✨ Blog de Tarot ✨</h1>
                    <p className="text-xl opacity-90">
                        Descubre los secretos del tarot, guías y consejos espirituales
                    </p>
                </div>
            </div>

            {/* Grid de Artículos */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            {/* Imagen del artículo */}
                            <div className="h-64 overflow-hidden bg-gradient-to-b from-purple-100 to-pink-50">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Contenido */}
                            <div className="p-6">
                                {/* Categoría y fecha */}
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>

                                {/* Título */}
                                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors">
                                    {post.title}
                                </h2>

                                {/* Extracto */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Leer más */}
                                <div className="mt-4 text-pink-600 font-semibold text-sm flex items-center">
                                    Leer más
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Sección de categorías */}
            <div className="bg-purple-50 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-purple-700 mb-6">Explora por Categoría</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Significados', 'Consejos', 'Guías', 'Ritual', 'Espiritualidad'].map((cat) => (
                            <button
                                key={cat}
                                className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;