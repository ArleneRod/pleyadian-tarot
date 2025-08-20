import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DataContainer_2 from "./components/DataContainer_2.jsx";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="min-h-screen h-full w-full bg-yellow-100">
                <Header /> {/* Header en todas las páginas */}

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="/sobre-mi" element={<DataContainer_2 />} />
                </Routes>

                <Footer /> {/* Footer en todas las páginas */}
            </div>
        </Router>
    );
}
export default App;