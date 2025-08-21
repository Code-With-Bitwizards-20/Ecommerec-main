import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      name: 'Perfumes',
      path: '/perfumes',
      description: 'Discover our collection of premium fragrances',
      image: '🌸',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Supplements',
      path: '/supplements',
      description: 'Health and wellness supplements for better living',
      image: '💊',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Knifes',
      path: '/knifes',
      description: 'Professional grade knives and cutlery',
      image: '🔪',
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Others',
      path: '/others',
      description: 'Explore our diverse range of products',
      image: '🛍️',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl text-white p-8 md:p-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Click and Ship
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your one-stop destination for quality products delivered right to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/perfumes"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Shop Now
            </Link>
            <Link
              to="/cart"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-8 text-center`}>
                  <div className="text-6xl mb-4">{category.image}</div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-center">{category.description}</p>
                  <div className="mt-4 text-center">
                    <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-200">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Why Choose Click and Ship?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">Carefully curated products from trusted brands</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">Competitive pricing with great value for money</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;