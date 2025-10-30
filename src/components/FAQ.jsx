import React, { useState } from 'react';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿Qué es el tarot y cómo funciona?",
            answer: "El tarot es una herramienta de autoconocimiento que utiliza 78 cartas con simbolismos para ayudarte a entender tu situación actual y explorar posibilidades futuras. No predice un destino fijo, sino que actúa como una brújula que te muestra diferentes caminos y te ayuda a tomar mejores decisiones."
        },
        {
            question: "¿Es mi primera vez, qué debo esperar?",
            answer: "En tu primera consulta, te haré algunas preguntas sobre lo que necesitas saber. Luego mezclo las cartas conectando con tu energía y realizo una tirada. Te explico el significado de cada carta de manera clara y comprensible, sin tecnicismos complicados. Es una conversación donde puedes hacer todas las preguntas que necesites."
        },
        {
            question: "¿Cuánto tiempo tarda la lectura?",
            answer: "Depende del servicio: las consultas por audio (Promo Flash) se responden en menos de 24 horas. Las videollamadas son en tiempo real y duran 30 minutos o 1 hora según el paquete que elijas. Siempre me tomo el tiempo necesario para que te sientas escuchada y comprendida."
        },
        {
            question: "¿Cómo se realiza el pago?",
            answer: "Aceptamos varios métodos de pago: transferencia bancaria, Yape, Plin o efectivo (solo en Arequipa). Te envío los datos de pago por WhatsApp y una vez confirmado, agendamos tu consulta. Todo es simple y seguro."
        },
        {
            question: "¿Las consultas son confidenciales?",
            answer: "¡Absolutamente! Todo lo que me cuentas es completamente confidencial. Respeto profundamente tu privacidad y nunca comparto información de mis consultantes. Puedes hablar con total confianza sobre cualquier tema."
        },
        {
            question: "¿Puedo hacer preguntas sobre amor, trabajo o dinero?",
            answer: "Sí, por supuesto. Puedes consultar sobre cualquier tema que te preocupe: amor, relaciones, trabajo, dinero, familia, decisiones importantes, proyectos personales, salud emocional... El tarot puede darte claridad en cualquier área de tu vida."
        },
        {
            question: "¿El tarot es religioso o requiere alguna creencia?",
            answer: "No, el tarot no está ligado a ninguna religión específica. Es una herramienta espiritual que puede usar cualquier persona, sin importar sus creencias. Lo importante es tener la mente abierta y disposición para reflexionar sobre lo que las cartas muestran."
        },
        {
            question: "¿Puedo tener más de una consulta al mes?",
            answer: "Sí, puedes consultar cuando lo necesites. Algunas personas vienen una vez al mes, otras solo en momentos importantes. Te recomiendo esperar al menos 2-3 semanas entre consultas sobre el mismo tema para dar tiempo a que las energías se desarrollen."
        },
        {
            question: "¿Qué diferencia hay entre la Promo Flash y las videollamadas?",
            answer: "La Promo Flash es por audios de WhatsApp, ideal para preguntas específicas y es más económica. Las videollamadas son en vivo, más personales e interactivas, ideales para temas complejos o cuando quieres una conexión directa. Ambas son igual de efectivas, solo cambia el formato."
        },
        {
            question: "¿Atiendes fuera de Arequipa?",
            answer: "¡Sí! Atiendo a personas de todo Perú y Latinoamérica a través de WhatsApp (audio) y videollamadas. La distancia no es problema, la energía se conecta igual. Solo necesitas internet y ganas de recibir tu mensaje."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Schema.org para FAQ (ayuda al SEO)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="relative bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-20 px-4 overflow-hidden" id="faq">
            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>

            {/* Elementos decorativos de fondo */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mb-6 font-pacifico tracking-wide drop-shadow-lg">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 font-mulish">
                        Todo lo que necesitas saber sobre las consultas de tarot
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <article
                            key={index}
                            className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 rounded-2xl shadow-lg border-2 border-purple-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-300/30"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 md:px-8 py-6 flex justify-between items-center gap-4 hover:bg-purple-100/30 transition-colors duration-300 focus:outline-none"
                                aria-expanded={openIndex === index}
                            >
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 font-mulish pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 md:px-8 pb-6 pt-2">
                                    <div className="bg-gradient-to-r from-purple-100/50 to-pink-100/50 p-5 rounded-xl border-l-4 border-purple-500">
                                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-mulish">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA al final */}
                <div className="mt-12 text-center bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 p-8 rounded-2xl shadow-lg border-2 border-purple-300/50">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                        ¿Tienes más preguntas?
                    </h3>
                    <p className="text-gray-700 mb-6 text-lg">
                        No dudes en contactarnos directamente. Estamos aquí para ayudarte.
                    </p>
                    <a
                        href="https://wa.me/51987698897?text=Hola!%20Tengo%20una%20pregunta%20sobre%20las%20consultas%20de%20tarot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Envíame un WhatsApp
                    </a>
                </div>

                {/* Elementos decorativos inferior */}
                <div className="flex justify-center gap-4 mt-12">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;