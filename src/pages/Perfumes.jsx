import React, { useState } from "react";
import Layout from "../components/Layout";
import AddToCartPopup from "../components/AddToCartPopup";
import { useCart } from "../context/CartContext";
import { Perfumes as PerfumeImages } from "../assets/indexForimages";

const Perfumes = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Perfume products data with images
  const perfumes = [
    {
      id: 1,
      name: "Creed Aventus",
      brand: "Creed",
      price: 39.49,
      image: PerfumeImages.creedAventusPerfume,
      description: "Creed Aventus for Men 100ML Perfume Spray is a timeless fragrance that epitomizes strength, sophistication, and success. Crafted by the renowned fragrance house Creed, this scent has gained iconic status since its launch.",
      rating: 4.9,
      category: "Perfumes",
    },
    {
      id: 2,
      name: "Jean Paul Le Beau For Men ",
      brand: "Jean Paul Gaultier",
      price: 49.49,
      image: PerfumeImages.jeanPaulAquaPerfume,
      description: "Le Beau by Jean Paul Gaultier is a Woody Aromatic fragrance for men. Le Beau was launched in 2019. Le Beau was created by Quentin Bisch and Sonia Constant. | 125ml",
      rating: 4.7,
      category: "Perfumes",
    },
    {
      id: 3,
      name: "Jean Paul Blue",
      brand: "Jean Paul Gaultier",
      price: 40.49,
      image: PerfumeImages.jeanPaulBluePerfume,
      description: "Jean Paul Gaultier Ultra Male Intense EDT 125ml is a signature scent that has become a cult favorite. This bold and daring scent is intense, masculine and sophisticated. With notes of cardamom and vanilla, it leaves a long lasting impression and is sure to draw attention | 125ml",
      rating: 4.6,
      category: "Perfumes",
    },
    {
      id: 4,
      name: "Jean Paul Male",
      brand: "Jean Paul Gaultier",
      price: 40.49,
      image: PerfumeImages.jeanPaulMalePerfume,
      description: "Jean Paul Gaultier Le Male Aviator EDT | 125ml",
      rating: 4.8,
      category: "Perfumes",
    },
  ];

  const [displayedProducts, setDisplayedProducts] = useState(perfumes);

  const handleSearch = (searchTerm) => {
    let filtered = perfumes;

    if (searchTerm.trim() !== "") {
      filtered = perfumes.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayedProducts(filtered);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  return (
    <Layout onSearch={handleSearch}>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl text-white p-8 mb-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Perfumes Collection
          </h1>
          <p className="text-xl opacity-90">
            Discover your signature scent from our premium fragrance collection
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((perfume) => (
          <div
            key={perfume.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="p-6 text-center">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {perfume.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{perfume.brand}</p>
              <p className="text-gray-600 text-sm mb-4">
                {perfume.description}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(perfume.rating)
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({perfume.rating})
                </span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-pink-600 mb-4">
                ${perfume.price}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(perfume)}
                className="w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 bg-pink-600 text-white hover:bg-pink-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {displayedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-600 mb-2">
            No perfumes found
          </h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      )}

      {/* Fragrance Guide */}
      <div className="mt-12 bg-pink-50 border border-pink-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-pink-800 mb-3">
          Fragrance Guide
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-pink-700">
          <div>
            <h4 className="font-medium mb-2">Top Notes</h4>
            <p>The first impression of a fragrance, lasting 15-30 minutes</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Heart Notes</h4>
            <p>The main body of the fragrance, lasting 2-4 hours</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Base Notes</h4>
            <p>The foundation that lasts throughout the day</p>
          </div>
        </div>
      </div>

      {/* Add to Cart Popup */}
      <AddToCartPopup
        isVisible={showPopup}
        product={selectedProduct}
        onClose={closePopup}
        categoryColor="pink"
      />
    </Layout>
  );
};

export default Perfumes;
