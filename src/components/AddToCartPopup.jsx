import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddToCartPopup = ({ isVisible, product, onClose, categoryColor = 'blue' }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible || !product) return null;

  const colorClasses = {
    pink: {
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      text: 'text-pink-800',
      button: 'bg-pink-600 hover:bg-pink-700',
      icon: 'text-pink-600'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      button: 'bg-green-600 hover:bg-green-700',
      icon: 'text-green-600'
    },
    gray: {
      bg: 'bg-gray-50',
      border: 'border-gray-200',
      text: 'text-gray-800',
      button: 'bg-gray-600 hover:bg-gray-700',
      icon: 'text-gray-600'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-800',
      button: 'bg-purple-600 hover:bg-purple-700',
      icon: 'text-purple-600'
    }
  };

  const colors = colorClasses[categoryColor] || colorClasses.blue;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Popup */}
        <div
          className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100 relative`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Success Icon */}
          <div className="text-center mb-4">
            <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} bg-white rounded-full shadow-lg mb-4`}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold ${colors.text} mb-2`}>Added to Cart!</h3>
          </div>

          {/* Product Info */}
          {/* <div className="flex items-center space-x-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl">{product.image}</div>
            <div className="flex-grow">
              <h4 className="font-semibold text-gray-800">{product.name}</h4>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-lg font-bold text-gray-700">${product.price}</p>
            </div>
          </div> */}
          {/* Product Info */}
          <div className="flex items-center space-x-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-grow">
              <h4 className="font-semibold text-gray-800">{product.name}</h4>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-lg font-bold text-gray-700">${product.price}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
            >
              Continue Shopping
            </button>
            <Link
              to="/cart"
              className={`flex-1 py-2 px-4 ${colors.button} text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center`}
              onClick={onClose}
            >
              View Cart
            </Link>
          </div>

          {/* Animation for success */}
          <div className="absolute -top-2 -right-2">
            <div className={`w-6 h-6 ${colors.icon} bg-white rounded-full shadow-lg animate-bounce`}>
              <svg className="w-4 h-4 m-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartPopup;