import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="logo">
        <a href="/" className="font-bold text-lg">VPT MEDIA</a>
      </div>

      {/* Navigation Links */}
      <div className="links flex-grow">
        <ul className="flex justify-center space-x-4">
          <li><a href="/virtual" className="hover:text-gray-600">Virtual</a></li>
          <li><a href="/News" className="hover:text-gray-600">News</a></li>
          <li><a href="/Projects" className="hover:text-gray-600">Projects</a></li>
          <li><a href="/Community" className="hover:text-gray-600">Community</a></li>
        </ul>
      </div>

      {/* Contact Button */}
      <div className="contact">
        <button className="text-white bg-black px-4 py-2 rounded">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;