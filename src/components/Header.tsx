import React, { useState } from 'react'
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-primary-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-500 hover:text-primary-600 font-medium transition-colors">Shop</a>
            <a href="#" className="text-gray-500 hover:text-primary-600 font-medium transition-colors">Categories</a>
            <a href="#" className="text-gray-500 hover:text-primary-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-500 hover:text-primary-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <HeartIcon className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <UserIcon className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 relative transition-colors">
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-gray-500 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a href="#" className="block px-3 py-2 text-gray-900 font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-500 hover:text-gray-900">Shop</a>
              <a href="#" className="block px-3 py-2 text-gray-500 hover:text-gray-900">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-500 hover:text-gray-900">About</a>
              <a href="#" className="block px-3 py-2 text-gray-500 hover:text-gray-900">Contact</a>
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header