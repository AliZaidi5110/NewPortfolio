import trading from './assets/trading.png'; 
import YouTubeIcon from '@mui/icons-material/YouTube';

function Trading() {
    return (
        <div className="max-w-[800px] text-center h-150 ml-10 md:ml-80 grid md:grid-cols-2 mx-auto">
            {/* Image with YouTube Icon Overlay */}
            <div className="relative">
                <img src={trading} className="w-90" alt="Trading" />
                {/* YouTube Icon Positioned in the center */}
                <div className="absolute top-[190px] left-40">
                    <YouTubeIcon className='bg-amber-600 rounded-full w-15' style={{ fontSize: '60px', color: 'black' }} />
                </div>
            </div>

            {/* Text Section */}
            <div className="text-left mt-10 mr-6 md:mr-0">
                <p className="text-gray-500">Since Year 1999</p>
                <h1 className="text3xl md:text-4xl font-bold py-2">
                    We are <span className="text-orange-400"> Fruitikha </span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illo quod tempora placeat quos, mollitia 
                    vitae odio est accusamus odit dignissimos eaque. Dignissimos libero?
                </p>
                <p className="py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque 
                    delectus nesciunt suscipit magnam non sint pariatur, minus facilis? Ipsam, nobis!
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 mb-3 mt-6 ml-18 rounded-full flex items-center justify-center"> 
                    Know More
                </button>
            </div>
        </div>
    );
}

export { Trading };
