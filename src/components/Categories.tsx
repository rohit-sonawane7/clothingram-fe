import React from 'react'

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    itemCount: '2,543 items'
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    itemCount: '1,892 items'
  },
  {
    id: 3,
    name: 'Home & Garden',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    itemCount: '3,421 items'
  },
  {
    id: 4,
    name: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    itemCount: '987 items'
  },
  {
    id: 5,
    name: 'Books',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    itemCount: '1,234 items'
  },
  {
    id: 6,
    name: 'Beauty',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    itemCount: '756 items'
  }
]

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our wide range of product categories
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{category.itemCount}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                    Shop now
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories