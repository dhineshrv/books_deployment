import React, { useState } from 'react';
import { ShoppingCart, Code, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectMaterialCardProps {
  material: {
    id: number;
    title: string;
    department: string;
    description: string;
    price: number;
    category: string;
    difficulty: string;
    images: string[];
  };
  onBuyNow: (material: any) => void;
}

const ProjectMaterialCard = ({ material, onBuyNow }: ProjectMaterialCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Software')) return Code;
    if (category.includes('Hardware')) return Zap;
    return Target;
  };

  const CategoryIcon = getCategoryIcon(material.category);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % material.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + material.images.length) % material.images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.02]">
      <div className="relative">
        <img
          src={material.images[currentImageIndex]}
          alt={material.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Image Navigation */}
        {material.images.length > 1 && (
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
              {material.images.map((_, index) => (
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
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(material.difficulty)}`}>
            {material.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white bg-opacity-90 rounded-full p-2">
            <CategoryIcon className="w-5 h-5 text-purple-600" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-purple-600 font-medium">{material.department}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {material.title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {material.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">Category:</span> {material.category}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-purple-600">₹{material.price}</span>
          </div>
          <div className="text-sm text-gray-500">
            Complete Kit
          </div>
        </div>
        
        <button
          onClick={() => onBuyNow(material)}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center group"
        >
          <ShoppingCart className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProjectMaterialCard;