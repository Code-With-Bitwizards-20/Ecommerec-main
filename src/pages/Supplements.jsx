import React, { useState } from 'react';
import Layout from '../components/Layout';
import AddToCartPopup from '../components/AddToCartPopup';
import { useCart } from '../context/CartContext';
import {
  tenXHealthOptimize90,
  ahccGlass60,
  emma60,
  hairGrowth90,
  harmoneHarmonyGlass72,
  immuno150,
  instaFlex40,
  macuhealth90,
  miracleMoo30,
  nadPlus,
  neutrafolMens,
  neutrafolWomenBalance,
  neutrafolWomen,
  omegaXL120,
  omegaXL60,
  preVagen60,
  sciaticEase120,
  sciaticPainRelief30,
  testBoost60,
  truNiagen90
} from '../assets/indexForimages';

const Supplements = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Real supplements data with actual product images
  const supplements = [
    {
      id: 11,
      name: "10X Health Optimize",
      brand: "10X Health System",
      price: 27.51,
      image: tenXHealthOptimize90,
      description: "10X Health Optimize Methylated Multivitamin - 90 Capsules, 34 in 1 Formula with 800 mcg of Vitamin B12 - Methylated Multivitamin for Men & Women with 5-MTHF, NAC, Methyl B Complex - MTHFR Supplement",
      rating: 4.8,
      category: "Supplements"
    },
    {
      id: 12,
      name: "AHCC Glass",
      brand: "Quality of Life",
      price: 27.51,
      image: ahccGlass60,
      description: "Quality Of LIFE Kinoko Platinum AHCC Supplement 750mg,60 Capsules Immune SUPPORT",
      rating: 4.9,
      category: "Supplements"
    },
    {
      id: 13,
      name: "Emma Digestive Health",
      brand: "Enclave BioActives",
      price: 27.51,
      image: emma60,
      description: "Emma Gut Health Doctors Endorsed Supplement - 60 Capsules - Relief from Gas and Bloating, Repairs Leaky Gut with Magnesium, Berberine, Vitamin D, Quercetin & More - Gut Health & Colon Cleanse Formula",
      rating: 4.6,
      category: "Supplements"
    },
    {
      id: 14,
      name: "Hair growth Nature bounty",
      brand: " Nature's bounty",
      price: 27.51,
      image: hairGrowth90,
      description: "Nature's Bounty Optimal Solutions Hair Growth,Support Thicker, 90 Capsules",
      rating: 4.5,
      category: "Supplements"
    },
    
  ];

  const [displayedProducts, setDisplayedProducts] = useState(supplements);

  const handleSearch = (searchTerm) => {
    let filtered = supplements;
    
    if (searchTerm.trim() !== '') {
      filtered = supplements.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white p-8 mb-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Supplements</h1>
          <p className="text-xl opacity-90">Premium supplements for your health and wellness journey</p>
        </div>
      </div>

      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((supplement) => (
          <div key={supplement.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col">
            <div className="p-6 text-center flex flex-col h-full">
              <div className="h-48 w-full mb-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={supplement.image} 
                  alt={supplement.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {supplement.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{supplement.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{supplement.brand}</p>
              <p className="text-gray-600 text-sm mb-4">{supplement.description}</p>
              
              {/* Rating */}
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(supplement.rating) ? 'fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({supplement.rating})</span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-green-600 mb-4">
                ${supplement.price}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(supplement)}
                className="w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 bg-green-600 text-white hover:bg-green-700"
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
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No supplements found</h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      )}

      {/* Health Disclaimer */}
      <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Health Disclaimer</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before use.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart Popup */}
      <AddToCartPopup
        isVisible={showPopup}
        product={selectedProduct}
        onClose={closePopup}
        categoryColor="green"
      />
    </Layout>
  );
};

export default Supplements;