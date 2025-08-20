import '../App.css'
import DataContainer from "../components/DataContainer.jsx";
import SimpleDataContainer from "../components/SimpleDataContainer.jsx";
import DataContainer_2 from "../components/DataContainer_2.jsx";
import TarotGrid from '../components/TarotGrid';
import Reviews from '../components/Reviews';

function HomePage() {
    return (
        <main className="pt-0">
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
