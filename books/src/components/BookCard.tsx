import React, { useState } from 'react';
import { ShoppingCart, Tag, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface BookCardProps {
  book: {
    id: number;
    title: string;
    author: string;
    originalPrice: number;
    sellingPrice: number;
    category: string;
    condition: string;
    images: string[];
  };
  onBuyNow: (book: any) => void;
}

const BookCard = ({ book, onBuyNow }: BookCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const discountPercentage = Math.round(((book.originalPrice - book.sellingPrice) / book.originalPrice) * 100);
  
  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'very good': return 'text-blue-600 bg-blue-100';
      case 'good': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % book.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + book.images.length) % book.images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.02]">
      <div className="relative">
        <img
          src={book.images[currentImageIndex]}
          alt={book.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Image Navigation */}
        {book.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {book.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(book.condition)}`}>
            {book.condition}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {discountPercentage}% OFF
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-blue-600 font-medium">{book.category}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {book.title}
        </h3>
        
        <p className="text-gray-600 mb-4">by {book.author}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">(4.5)</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-green-600">₹{book.sellingPrice}</span>
            <span className="text-sm text-gray-500 line-through ml-2">₹{book.originalPrice}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Tag className="w-4 h-4 mr-1" />
            Save ₹{book.originalPrice - book.sellingPrice}
          </div>
        </div>
        
        <button
          onClick={() => onBuyNow(book)}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center group"
        >
          <ShoppingCart className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BookCard;