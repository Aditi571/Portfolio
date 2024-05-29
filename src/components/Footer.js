import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div id='contact'>
        <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">MyPortfolio</h2>
          <p className="text-gray-400">© 2024 MyPortfolio. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a rel="noreferrer" href="https://www.linkedin.com/in/aditi-rawat-276701256/" target="_blank" className="text-gray-400 hover:text-white"><FaLinkedin className="mr-2" size={30} color="white"/></a>
          <a rel="noreferrer" href="https://github.com/Aditi571" className="text-gray-400 hover:text-white" target="_blank"><FaGithub  className="mr-2" size={30} color="white"/></a>
          <a rel="noreferrer" href="https://www.instagram.com/aditi.rawat.12/?igsh=aHNsZTJ3bmF5OG9z" className="text-gray-400 hover:text-white" target="_blank"><FaInstagram className="mr-2" size={30} color="white"/></a>
          <a rel="noreferrer" href="#contact" className="text-gray-400 hover:text-white" target="_blank"><FaDiscord className="mr-2" size={30} color="white"/></a>
        </div>
      </div>
    </footer>
    </div>
  )
}
