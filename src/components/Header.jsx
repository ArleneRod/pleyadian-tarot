import React, { useState } from 'react';
import tarotLogo from '../assets/tarot-logo.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSobreMiClick = () => {
        setOpenNav(false); // Cerrar menú móvil
        if (location.pathname !== "/") {
            navigate("/#sobre-mi");
        } else {
            const sobreMiSection = document.getElementById("sobre-mi");
            if (sobreMiSection) {
                sobreMiSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleCartaDelDiaClick = () => {
        setOpenNav(false); // Cerrar menú móvil
        if (location.pathname !== "/") {
            navigate("/#carta-del-dia");
        } else {
            const cartaDelDiaSection = document.getElementById("carta-del-dia");
            if (cartaDelDiaSection) {
                cartaDelDiaSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleInicioClick = () => {
        setOpenNav(false); // Cerrar menú móvil
        window.scrollTo(0, 0);
    };

    return (
        <nav className="block w-full max-w-screen-xl px-6 py-2 mx-auto sticky top-3 shadow-2xl lg:px-8 lg:py-2.5 backdrop-blur-xl backdrop-saturate-200 z-[9999] rounded-2xl bg-gradient-to-r from-purple-600/80 via-pink-500/80 to-indigo-600/80 text-white font-mulish border-2 border-purple-300/30">
            <div className="container flex flex-wrap items-center justify-between mx-auto">

                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center space-x-2 group"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <div className="bg-white/20 p-1.5 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                        <img src={tarotLogo} alt="Tarot Logo" className="w-10 h-10 lg:w-12 lg:h-12" />
                    </div>
                    <span className="text-2xl lg:text-3xl font-pacifico text-white hover:text-yellow-200 transition-all duration-300 drop-shadow-lg">
                        Pleyadian
                    </span>
                </Link>

                {/* Links Desktop */}
                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
                        <li>
                            <Link
                                to="/"
                                onClick={() => window.scrollTo(0, 0)}
                                className="px-5 py-2 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 hover:scale-105 transform border-2 border-white/20 hover:border-white/40 inline-block"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleCartaDelDiaClick}
                                className="px-5 py-2 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 hover:scale-105 transform border-2 border-white/20 hover:border-white/40"
                            >
                                Carta del día
                            </button>
                        </li>
                        <li>
                            <Link
                                to="/contacto"
                                className="px-5 py-2 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 hover:scale-105 transform border-2 border-white/20 hover:border-white/40 inline-block"
                            >
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faq"
                                className="px-5 py-2 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 hover:scale-105 transform border-2 border-white/20 hover:border-white/40 inline-block"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleSobreMiClick}
                                className="px-5 py-2 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 hover:scale-105 transform border-2 border-white/20 hover:border-white/40"
                            >
                                Sobre mí
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Botón Hamburguesa */}
                <button
                    className="relative ml-auto h-8 w-8 lg:hidden text-white bg-white/20 rounded-lg p-1 hover:bg-white/30 transition-all duration-300"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Menú Móvil */}
            {openNav && (
                <div className="lg:hidden mt-4 bg-gradient-to-r from-purple-700/60 via-pink-600/60 to-indigo-700/60 rounded-xl p-4 backdrop-blur-md border border-white/20">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link
                                to="/"
                                className="block text-center px-4 py-2.5 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 border-2 border-white/20"
                                onClick={handleInicioClick}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleCartaDelDiaClick}
                                className="w-full text-center px-4 py-2.5 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 border-2 border-white/20"
                            >
                                Carta del día
                            </button>
                        </li>
                        <li>
                            <Link
                                to="/contacto"
                                className="block text-center px-4 py-2.5 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 border-2 border-white/20"
                                onClick={() => setOpenNav(false)}
                            >
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faq"
                                className="block text-center px-4 py-2.5 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 border-2 border-white/20"
                                onClick={() => setOpenNav(false)}
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleSobreMiClick}
                                className="w-full text-center px-4 py-2.5 text-lg font-bold bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 border-2 border-white/20"
                            >
                                Sobre mí
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Header;




