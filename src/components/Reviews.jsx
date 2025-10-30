import React from 'react';

function Reviews() {
    const testimonials = [
        {
            name: "Sandra R.",
            review: "La lectura con Astrid fue una experiencia muy especial. Me sentí escuchada y comprendida, como si estuviera hablando con alguien que realmente conectaba con mi energía. Las cartas me dieron claridad en un momento en que lo necesitaba mucho.",
            avatar: "https://i.pravatar.cc/100?img=34",
        },
        {
            name: "Andre M.",
            review: "Al principio dudaba del tarot, pero esta sesión fue diferente. Todo fluyó con tanta paz y calidez... No fue solo una lectura, fue un momento de conexión profunda conmigo mismo. Eternamente agradecido.",
            avatar: "https://i.pravatar.cc/100?img=59",
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 py-20 px-4 text-center overflow-hidden" id="reviews">

            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                {/* Título mejorado */}
                <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mb-6 font-pacifico tracking-wide drop-shadow-lg">
                    Testimonios
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto font-mulish">
                    Lo que dicen las personas que han confiado en Pleyadian Tarot
                </p>

                {/* Grid de testimonios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 p-10 rounded-3xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 border-2 border-purple-200/50 backdrop-blur-sm group"
                        >
                            {/* Efecto de brillo en hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-pink-400/5 to-indigo-400/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Avatar con efectos */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="relative w-24 h-24 rounded-full mx-auto border-4 object-cover group-hover:scale-110 transition-all duration-300 shadow-lg"
                                    style={{
                                        borderImage: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1) 1'
                                    }}
                                />
                            </div>

                            {/* Icono de comillas decorativo */}
                            <div className="text-purple-300 text-6xl font-serif mb-2 leading-none">"</div>

                            {/* Review */}
                            <p className="relative italic text-gray-700 mb-6 text-base md:text-lg leading-relaxed font-mulish">
                                {item.review}
                            </p>

                            {/* Nombre */}
                            <h3 className="relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                {item.name}
                            </h3>

                            {/* Estrellas decorativas */}
                            <div className="flex justify-center gap-1 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Elemento decorativo inferior */}
                <div className="flex justify-center gap-4 mt-16">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
