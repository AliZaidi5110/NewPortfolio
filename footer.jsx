import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SendIcon from '@mui/icons-material/Send';
function Footer() {
    return (
        <footer className="bg-[#0a1d2e]  text-white py-10 px-6">
            <div className="max-w-5xl mx-auto pt-25 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
                {/* About Us */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-2">About us</h2>
                    <div className="w-8 h-[1px] bg-orange-400 mb-2"></div>
                    <p className="text-gray-400">
                        Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                    </p>
                </div>

                {/* Get in Touch */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-2">Get in Touch</h2>
                    <div className="w-8 h-[1px] bg-orange-400 mb-2"></div>
                    <p className="text-gray-400 pt-2">34/8, East Hukupara, Gifirtok, Sadan.</p>
                    <p className="text-gray-400 py-2">support@fruitikha.com</p>
                    <p className="text-gray-400">+00 111 222 3333</p>
                </div>

                {/* Pages */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-2">Pages</h2>
                    <div className="w-8 h-[1px] bg-orange-400 mb-2"></div>
                    <ul className="space-y-1 text-gray-400 py-2">
                        <li><KeyboardArrowRightIcon className='text-orange-400'/> Home</li>
                        <li><KeyboardArrowRightIcon className='text-orange-400'/> About</li>
                        <li><KeyboardArrowRightIcon className='text-orange-400'/> Shop</li>
                        <li><KeyboardArrowRightIcon className='text-orange-400'/> News</li>
                        <li><KeyboardArrowRightIcon className='text-orange-400'/> Contact</li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-2">Subscribe</h2>
                    <div className="w-8 h-[1px] bg-orange-400 mb-2"></div>
                    <p className="text-gray-400 mb-4">Subscribe to our mailing list to get the latest updates.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-[#04233b] px-3 py-2 text-sm outline-none text-white w-full"
                        />
                        <button className="bg-[#04233b] border-2 border-gray-900 px-4">
                           <SendIcon className='text-orange-400'/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center grid md:grid-cols-2 text-gray-400 text-xs">
                <div className='max-w-[900px] md:pl-40 text-left'>
                <p className='md:max-w-80'>
                    Copyright © 2019 - <span className="text-orange-400">Imran Hossain</span>, All Rights Reserved. |
                    Distributed by <span className="text-orange-400">Themewagon</span>
                </p>
                </div>
                <div className="mt-3 flex justify-center gap-4 text-white text-lg">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                    <LinkedInIcon/>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
