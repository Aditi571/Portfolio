import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyPortFolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#home" className="block md:inline-block hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm ">Home</a>
          <a href="#about" className="block md:inline-block hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm ">About</a>
          <a href="#skills" className="block md:inline-block hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm ">Skills</a>
          <a href="#projects" className="block md:inline-block hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm ">Projects</a>
          <a href="#contact" className="block md:inline-block hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm ">Contact</a>
        </div>
      </div>
    </nav>
  )
}
