import React from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";
function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleCartaDelDiaClick = () => {
        if (location.pathname !== "/") {
            navigate("/#carta-del-dia");
        } else {
            document.getElementById('carta-del-dia').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleSobreMiClick = () => {
        if (location.pathname !== "/") {
            navigate("/#sobre-mi");
        } else {
            document.getElementById('sobre-mi').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleReviewsClick = () => {
        if (location.pathname !== "/") {
            navigate("/#reviews");
        } else {
            const reviewsSection = document.getElementById('reviews');
            if (reviewsSection) {
                reviewsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    return (
        <footer className="relative w-full bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-100 border-t border-pink-200">
            <div className="mx-auto w-full max-w-7xl px-8 py-8">
                <div className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2 lg:grid-cols-3">

                    <div className="lg:col-span-1">
                        <h6 className="font-serif font-bold text-2xl lg:text-3xl text-pink-700 mb-3">
                            ✨ Pleyadian Tarot
                        </h6>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            Descubre los mensajes del universo a través de las cartas.
                            Conecta con tu intuición y encuentra las respuestas que buscas.
                        </p>
                        <p className="text-pink-600 text-sm font-medium">
                            📍 Arequipa, Perú
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 lg:col-span-2">
                        <div>
                            <ul className="space-y-3">
                                <li
                                    className="text-black hover:text-pink-600 transition-colors duration-300 font-medium cursor-pointer"
                                    onClick={handleCartaDelDiaClick}
                                >
                                    🔮 Carta del Día
                                </li>
                                <li
                                    className="text-black hover:text-pink-600 transition-colors duration-300 font-medium cursor-pointer"
                                    onClick={handleSobreMiClick}
                                >
                                    ✨ About Me
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li
                                    className="text-black hover:text-pink-600 transition-colors duration-300 font-medium cursor-pointer"
                                    onClick={handleReviewsClick}
                                >
                                    ⭐ Reviews
                                </li>
                                <li>
                                    <Link
                                        to="/contacto"
                                        className="text-black hover:text-pink-600 transition-colors duration-300 font-medium"
                                    >
                                        📞 Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Resto del footer */}
                <div className="mt-8 pt-6 border-t border-pink-200">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <small className="text-gray-600 text-center text-sm">
                            © 2025 Pleyadian Tarot. Conectando almas con el universo ✨
                        </small>

                        <div className="flex gap-3">
                            <a
                            href="https://wa.me/51987698897"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-800 transition-colors duration-300"
                            aria-label="WhatsApp"
                            >
                            <MessageCircle size={24} />
                        </a>
                            <a
                                href="https://www.instagram.com/pleyadian.tarot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                            >
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
