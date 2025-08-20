import React from 'react';

function Reviews() {
    const testimonials = [
        {
            name: "Sandra R.",
            review: "La lectura con Astrid fue una experiencia muy especial. Me sentí escuchada y comprendida, como si estuviera hablando con alguien que realmente conectaba con mi energía. Las cartas me dieron claridad en un momento en que lo necesitaba mucho. 🌟",
            avatar: "https://i.pravatar.cc/100?img=34",
        },
        {
            name: "Andre M.",
            review: "Al principio dudaba del tarot, pero esta sesión fue diferente. Todo fluyó con tanta paz y calidez... No fue solo una lectura, fue un momento de conexión profunda conmigo mismo. Eternamente agradecido. ✨",
            avatar: "https://i.pravatar.cc/100?img=59",
        },
    ];

    return (
        <section className="bg-white py-16 px-4 text-center" id="reviews">
            <h2 className="text-3xl font-semibold text-purple-700 mb-12 font-serif tracking-wide">
                💬 Testimonios reales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-purple-50 p-8 rounded-xl shadow-md transition-transform hover:scale-105 duration-300"
                    >
                        <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-200 object-cover"
                        />
                        <p className="italic text-gray-700 mb-4">"{item.review}"</p>
                        <h3 className="text-lg font-bold text-purple-600">{item.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
