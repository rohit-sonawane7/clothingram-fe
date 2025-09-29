import React, { useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className="bg-primary-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Stay in the loop
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-primary-100">
              Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special offers.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <form onSubmit={handleSubmit} className="sm:flex">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="block w-full pl-10 pr-3 py-3 text-base rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:max-w-xs"
                  required
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-primary-800 border border-transparent rounded-md py-3 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-primary-200">
              We care about your privacy. Read our{' '}
              <a href="#" className="text-white underline hover:text-primary-100">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter