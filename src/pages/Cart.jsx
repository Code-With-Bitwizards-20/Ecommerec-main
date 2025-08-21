import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const getSubtotal = () => {
    return getCartTotal();
  };

  const getShipping = () => {
    return 10.0; // Fixed $10 shipping
  };

  const getTotal = () => {
    return getSubtotal() + getShipping();
  };

  return (
    <Layout showSearch={false}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl text-white p-6 sm:p-8 mb-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Shopping Cart
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <div className="text-6xl sm:text-8xl mb-6">🛒</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/perfumes"
                className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-200"
              >
                Shop Perfumes
              </Link>
              <Link
                to="/supplements"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Shop Supplements
              </Link>
              <Link
                to="/knifes"
                className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
              >
                Shop Knives
              </Link>
              <Link
                to="/others"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
              >
                Shop Others
              </Link>
            </div>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                  Cart Items ({cartItems.length})
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-lg p-3 sm:p-4"
                    >
                      {/* Mobile Layout */}
                      <div className="block sm:hidden">
                        <div className="flex items-start space-x-3 mb-4">
                          <div className="text-3xl flex-shrink-0">
                            {item.image}
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="text-base font-semibold text-gray-800 truncate">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {item.brand}
                            </p>
                            <p className="text-xs text-gray-400">
                              {item.category}
                            </p>
                            <p className="text-base font-bold text-blue-600 mt-1">
                              ${item.price}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                            >
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 12H4"
                                />
                              </svg>
                            </button>

                            <span className="w-6 text-center font-semibold text-sm">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                            >
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-base font-bold text-gray-800 mb-1">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 text-xs transition-colors duration-200"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden sm:flex items-center space-x-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">{item.brand}</p>
                          <p className="text-xs text-gray-400">
                            {item.category}
                          </p>
                          <p className="text-lg font-bold text-blue-600 mt-1">
                            ${item.price}
                          </p>
                        </div>

                        <div className="flex items-center space-x-3 flex-shrink-0">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                          </button>

                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <p className="text-lg font-bold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm mt-1 transition-colors duration-200"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                  <Link
                    to="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-200 hover:translate-x-1 group"
                  >
                    <span className="transition-transform duration-200 group-hover:-translate-x-1">
                      ←
                    </span>
                    <span className="ml-2">Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 sticky top-24">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      ${getSubtotal().toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      ${getShipping().toFixed(2)}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg sm:text-xl font-bold">
                      <span>Total</span>
                      <span className="text-blue-600">
                        ${getTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mt-6">
                  Proceed to Checkout
                </button>

                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span>Secure checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
