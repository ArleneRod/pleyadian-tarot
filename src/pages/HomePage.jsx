import '../App.css'
import { SEOHead } from '../components/SEOHead.jsx';
import DataContainer from "../components/DataContainer.jsx";
import SimpleDataContainer from "../components/SimpleDataContainer.jsx";
import DataContainer_2 from "../components/DataContainer_2.jsx";
import TarotGrid from '../components/TarotGrid';
import Reviews from '../components/Reviews';

function HomePage() {
    return (
        <main className="pt-0">
            <SEOHead
                title="Pleyadian Tarot - Lectura de Tarot en Arequipa, Perú | Consultas Online"
                description="Consultas de tarot profesionales en Arequipa, Perú. Lectura de cartas online por videollamada y audio. Desde S/15. ¡Agenda ahora!"
                keywords="tarot Arequipa, lectura de tarot Perú, tarot online, consulta tarot, tarotista Arequipa"
                url="https://pleyadian-tarot.vercel.app"
            />
            <DataContainer />

            <div id="sobre-mi">
                <DataContainer_2 />
            </div>
            <Reviews />
            <SimpleDataContainer />

            <div id="carta-del-dia">
                <TarotGrid />
            </div>
        </main>
    );
}

export default HomePage;
