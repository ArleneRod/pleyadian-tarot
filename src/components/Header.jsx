import React, { useState } from 'react';
import tarotLogo from '../assets/tarot-logo.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSobreMiClick = () => {
        if (location.pathname !== "/") {
            navigate("/#sobre-mi"); // Navega a Home con hash
        } else {
            const sobreMiSection = document.getElementById("sobre-mi");
            if (sobreMiSection) {
                sobreMiSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    const handleCartaDelDiaClick = () => {
        if (location.pathname !== "/") {
            navigate("/#carta-del-dia");
        } else {
            const cartaDelDiaSection = document.getElementById("carta-del-dia");
            if (cartaDelDiaSection) {
                cartaDelDiaSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    return (
        <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto sticky top-3 shadow-lg lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999] rounded-xl bg-black/30 text-white font-mulish">
            <div className="container flex flex-wrap items-center justify-between mx-auto">

                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center space-x-2"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <img src={tarotLogo} alt="Tarot Logo" className="w-10 h-10" />
                    <span className="text-xl font-pacifico text-white hover:text-purple-300 transition-all duration-300">
                    Pleyadian
                </span>
                </Link>

                {/* Links */}
                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li className="text-sm hover:text-purple-300 transition">
                            <Link
                                to="/"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li
                            onClick={handleCartaDelDiaClick}
                            className="text-sm hover:text-purple-300 transition cursor-pointer"
                        >
                            Carta del día
                        </li>
                        <li className="text-sm hover:text-purple-300 transition">
                            <Link to="/contacto">Contacto</Link>
                        </li>
                        <li
                            onClick={handleSobreMiClick}
                            className="text-sm hover:text-purple-300 transition cursor-pointer"
                        >
                            Sobre mí
                        </li>
                    </ul>
                </div>

                {/* Botón Hamburguesa */}
                <button
                    className="relative ml-auto h-6 w-6 lg:hidden text-white"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Header;




