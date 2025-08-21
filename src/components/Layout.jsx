import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchBar from './SearchBar';

const Layout = ({ children, showSearch = true, onSearch }) => {
  const handleSearch = (searchTerm) => {
    // Pass search term to parent component if onSearch prop is provided
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      // Default search behavior
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {showSearch && <SearchBar onSearch={handleSearch} />}
      <main className="flex-grow">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;