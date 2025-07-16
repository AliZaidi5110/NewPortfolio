import logo from './assets/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { NavLink } from 'react-router-dom';


function Navbar() {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`w-full  z-50 transition-all duration-300 ${
                scrolled ? 'fixed bg-black top-0 left-0 shadow-md' : 'fixed top-0 left-0 bg-transparent'
            }`}
        >
            <div className="flex justify-around items-center p-5 px-4 max-w-full mx-auto">
                <h1 className="w-[200px]">
                    <img src={logo} alt="logo" />
                </h1>

                <ul className="hidden md:flex gap-4 cursor-pointer text-white font-bold text-xl">

                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> Home </NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> About </NavLink></li>
                    <li><NavLink to="/product" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> Pages </NavLink></li>
                    <li><NavLink to="/news" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> News </NavLink></li>
                    <li><NavLink to="/contacts" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> Contact </NavLink></li>
                    <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> Shop </NavLink></li>

                </ul>

                <div className="flex gap-4 text-white text-xl">
                    <ol><ShoppingCartIcon /></ol>
                    <ol><SearchIcon /></ol>
                </div>

                <div
                    onClick={handleNav}
                    className="block md:hidden text-white font-bold z-50 bg-orange-500 p-2"
                >
                    {nav ? <CloseIcon /> : <MenuIcon />}
                </div>

                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'fixed left-0 top-0 w-full h-[60%] border-r border-gray-700 bg-black ease-in-out duration-500'
                            : 'fixed left-[-100%]'
                    }
                >
                    
                    <h1 className="w-[200px] p-4">
                        <img src={logo} alt="/" />
                    </h1>
                    
                   <ul className="mt-5 text-white z-10 font-bold text-xl md:hidden">
  <li className="p-4 border-b border-gray-600">
    <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> Home </NavLink>
  </li>
  <li className="p-4 border-b border-gray-600">
    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> About </NavLink>
  </li>
  <li className="p-4 border-b border-gray-600">
    <NavLink to="/product" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> Pages </NavLink>
  </li>
  <li className="p-4 border-b border-gray-600">
    <NavLink to="/news" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> News </NavLink>
  </li>
  <li className="p-4 border-b border-gray-600">
    <NavLink to="/contacts" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> Contact </NavLink>
  </li>
  <li className="p-4 border-b border-gray-600">
    <NavLink to="/shop" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}> Shop </NavLink>
  </li>
</ul>

                </div>
            </div>
        </nav>
    );
}

export { Navbar };
