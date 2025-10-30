import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SEOHead } from '../components/SEOHead';

function ContactPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación simple
        if (!formData.nombre || !formData.email || !formData.servicio) {
            alert('⚠️ Por favor completa los campos obligatorios');
            return;
        }

        // Configuración EmailJS con variables de entorno
        const templateParams = {
            from_name: formData.nombre,
            from_email: formData.email,
            phone: formData.telefono,
            service: formData.servicio,
            message: formData.mensaje,
            to_email: 'contacto@pleyadiantarot.com'
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((response) => {
                console.log('Email enviado exitosamente:', response);
                alert('✅ ¡Mensaje enviado exitosamente! Te contactaremos pronto 💫');

                // Limpiar formulario
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    servicio: '',
                    mensaje: ''
                });
            })
            .catch((error) => {
                console.error('Error al enviar email:', error);
                alert('❌ Error al enviar el mensaje. Por favor intenta de nuevo.');
            });
    };

    return (
        <>
            <SEOHead
                title="Contacto - Pleyadian Tarot | Agenda tu Consulta de Tarot"
                description="Contacta con Astrid para agendar tu consulta de tarot. WhatsApp: +51 987 698 897. Respuesta rápida en menos de 24 horas."
                keywords="contacto tarot Arequipa, agendar consulta tarot, WhatsApp tarot"
                url="https://pleyadian-tarot.vercel.app/contacto"
            />
            <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-gray-50 py-12">
                <div className="container mx-auto px-4 max-w-2xl">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            ✨ Contáctanos ✨
                        </h1>
                        <p className="text-xl text-gray-600">
                            🔮 Cuéntanos cómo podemos ayudarte con tu consulta espiritual
                        </p>
                    </div>

                    {/* Formulario */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-pink-200">
                        <div className="space-y-6">

                            {/* Nombre */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    👤 Nombre completo *
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none"
                                    placeholder="Escribe tu nombre"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    📧 Correo electrónico *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            {/* Teléfono */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    📱 Teléfono (opcional)
                                </label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none"
                                    placeholder="+51 999 999 999"
                                />
                            </div>

                            {/* Tipo de servicio */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    🔮 ¿Qué servicio te interesa? *
                                </label>
                                <select
                                    name="servicio"
                                    value={formData.servicio}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none"
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="1pregunta">⚡ Promo Flash - 1 pregunta (15 soles)</option>
                                    <option value="3preguntas">🌟 Promo Flash - 3 preguntas (40 soles)</option>
                                    <option value="5preguntas">✨ Promo Flash - 5 preguntas (55 soles)</option>
                                    <option value="videollamada30">⏰ Videollamada 30 min (80 soles)</option>
                                    <option value="videollamada60">🕐 Videollamada 1 hora (140 soles)</option>
                                    <option value="consulta">💬 Consulta personalizada</option>
                                    <option value="otro">🌙 Otro servicio</option>
                                </select>
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    💭 Cuéntanos más detalles
                                </label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none outline-none"
                                    placeholder="Comparte aquí tu situación, preguntas específicas o cualquier detalle que consideres importante..."
                                ></textarea>
                            </div>

                            {/* Botón de envío */}
                            <div className="text-center pt-4">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    💌 Enviar mensaje
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Información adicional */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-white/60 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl mb-3 opacity-60 filter grayscale">⚡</div>
                            <h3 className="font-bold text-gray-800 mb-2">Respuesta rápida</h3>
                            <p className="text-sm text-gray-600">Te contactaremos en menos de 24 horas</p>
                        </div>
                        <div className="bg-white/60 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl mb-3 opacity-60 filter grayscale">🔒</div>
                            <h3 className="font-bold text-gray-800 mb-2">100% Confidencial</h3>
                            <p className="text-sm text-gray-600">Tu información está completamente segura</p>
                        </div>
                        <div className="bg-white/60 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl mb-3 opacity-60 filter grayscale">💫</div>
                            <h3 className="font-bold text-gray-800 mb-2">Sin compromiso</h3>
                            <p className="text-sm text-gray-600">Primera consulta sin costo adicional</p>
                        </div>
                    </div>

                    {/* Formas de contacto directo */}
                    <div className="mt-12 bg-white/60 rounded-xl p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">💌 O contáctanos directamente</h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <div className="flex items-center justify-center gap-2 text-gray-700">
                                <span className="text-2xl">📧</span>
                                <span>contacto@pleyadiantarot.com</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-gray-700">
                                <span className="text-2xl">📱</span>
                                <span>+51 987698897</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
);
}

export default ContactPage;