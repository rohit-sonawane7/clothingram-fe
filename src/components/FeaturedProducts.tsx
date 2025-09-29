import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 324,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.6,
    reviews: 189,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    badge: 'New'
  },
  {
    id: 3,
    name: 'Premium Coffee Maker',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviews: 567,
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    badge: 'Sale'
  },
  {
    id: 4,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.7,
    reviews: 892,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    badge: 'Eco-Friendly'
  },
  {
    id: 5,
    name: 'Wireless Phone Charger',
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviews: 234,
    image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    badge: 'Popular'
  },
  {
    id: 6,
    name: 'Minimalist Desk Lamp',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    badge: 'Limited'
  }
]

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our handpicked selection of premium products
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    product.badge === 'Best Seller' ? 'bg-yellow-100 text-yellow-800' :
                    product.badge === 'New' ? 'bg-green-100 text-green-800' :
                    product.badge === 'Sale' ? 'bg-red-100 text-red-800' :
                    product.badge === 'Eco-Friendly' ? 'bg-emerald-100 text-emerald-800' :
                    product.badge === 'Popular' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <HeartIcon className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <button className="flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    <ShoppingCartIcon className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts