import React, { useEffect, useState } from 'react';
import one from './assets/logo1.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.png';

const logos = [one, two, three, four, five];

function Logo() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % (logos.length - 3));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-100 py-8 px-20 overflow-hidden flex justify-center items-center mt-10">
            <div
                className="flex transition-transform duration-2000 ease-in-out w-[225%]"
                style={{ transform: `translateX(-${index * 25}%)` }}
            >
                {logos.map((logo, i) => (
                    <div key={i} className="min-w-[25%] flex justify-center items-center px-4">
                        <img
                            src={logo}
                            alt={`logo-${i}`}
                            className="w-46 h-auto opacity-80 hover:opacity-100 transition"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export { Logo };
