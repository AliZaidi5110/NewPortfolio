import React, { useState, useEffect } from 'react';
import david from './assets/customer1.png';
import emma from './assets/customer2.png';
import john from './assets/customer3.png';

const customers = [
  {
    name: "David Napih",
    role: "Local shop owner",
    image: david,
    feedback: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum labore deserunt
               dolore necessitatibus porro at fugiat. Lorem ipsum dolor sit, amet consectetur adipisicing
               elit. Expedita, dolorem. quod eum ipsa!"`,
  },
  {
    name: "Emma Watson",
    role: "Boutique Owner",
    image: emma,
    feedback: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum labore deserunt
               dolore necessitatibus porro at fugiat. Lorem ipsum dolor sit, amet consectetur adipisicing
               elit. Expedita, dolorem. quod eum ipsa!"`,
  },
  {
    name: "John Smith",
    role: "Cafe Manager",
    image: john,
    feedback: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum labore deserunt
               dolore necessitatibus porro at fugiat. Lorem ipsum dolor sit, amet consectetur adipisicing
               elit. Expedita, dolorem. quod eum ipsa!"`,
  }
];

function Customer() {
  const [index, setIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('left');

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection('right'); // Exit to the right
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % customers.length);
        setSlideDirection('left'); // Enter from the left
      }, 500); // Match transition duration
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const { name, role, image, feedback } = customers[index];

  return (
    <div className="max-w-[600px] h-100 mt-10 text-center mx-auto overflow-hidden">
      <div
        key={index}
        className={`transition-transform duration-500 ease-in-out transform ${
          slideDirection === 'left'
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0'
        }`}
      >
        <img className='rounded-full w-32 mx-auto p-3' src={image} alt={name} />
        <h4 className='font-bold text-xl'>{name}</h4>
        <h6 className='text-gray-400 p-2 font-bold text-sm'>{role}</h6>
        <p className='p-3 text-gray-400'>{feedback}</p>
      </div>
    </div>
  );
}

export { Customer };