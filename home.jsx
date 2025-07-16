import { Hero } from "./hero";
import { Navbar } from "./navbar";
import bgimg from './assets/bgimage.png';

function Home() {
    return (
        <div
           id="hero" className="w-full absolute h-full bg-cover mb-50 bg-center "
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            {/* ✅ Use rgba for precise transparency */}
            <div
                className="absolute inset-0 z-0"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // 50% dark overlay
            ></div>

            {/* ✅ Content stays above overlay */}
            <div className="relative top-0 z-10">
                <Navbar />
                <Hero />
            </div>
        </div>
    );
}

export { Home };
