import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import DataContainer_2 from "./components/DataContainer_2.jsx";
import Header from './components/Header';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { FloatingButtons } from './components/Floatingbuttons';

function App() {
    return (
        <HelmetProvider>
            <div className="App">
        <Router>
            <div className="min-h-screen h-full w-full bg-yellow-100">
                <Header /> {/* Header en todas las páginas */}

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/sobre-mi" element={<DataContainer_2 />} />
                </Routes>

                <Footer />
            </div>
        </Router>
                <FloatingButtons
                    whatsappNumber="51987698897"
                    instagramHandle="pleyadian.tarot"
                />
            </div>
        </HelmetProvider>
    );
}
export default App;