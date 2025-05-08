import React, { useState } from 'react';
import { homepageData } from '../../data';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={homepageData.header.logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {homepageData.header.actions.map((action, index) => (
            <div key={index} className="relative group">
              {action.dropdown ? (
                <>
                  <button className="text-gray-700 hover:text-indigo-600 font-medium flex items-center">
                    {action.label}
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                    {action.dropdown.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : action.isPrimary ? (
                <a
                  href={action.href}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  {action.label}
                </a>
              ) : (
                <a
                  href={action.href}
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  {action.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            {homepageData.header.actions.map((action, index) => (
              <div key={index} className="py-2">
                {action.dropdown ? (
                  <div>
                    <button className="text-gray-700 font-medium flex items-center w-full">
                      {action.label}
                      <ChevronDownIcon className="w-4 h-4 ml-1" />
                    </button>
                    <div className="pl-4 mt-2">
                      {action.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="block py-2 text-gray-700 hover:text-indigo-600"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={action.href}
                    className={`block py-2 font-medium ${
                      action.isPrimary
                        ? 'bg-indigo-600 text-white px-4 rounded-lg hover:bg-indigo-700 text-center'
                        : 'text-gray-700 hover:text-indigo-600'
                    }`}
                  >
                    {action.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;