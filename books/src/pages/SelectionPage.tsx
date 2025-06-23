import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Upload, Wrench, Share } from 'lucide-react';

const SelectionPage = () => {
  const navigate = useNavigate();

  const navigationOptions = [
    {
      id: 'buy-book',
      title: 'Buy Book',
      description: 'Browse and purchase used books',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      path: '/buy-book'
    },
    {
      id: 'sell-book',
      title: 'Sell Book',
      description: 'List your books for sale',
      icon: Upload,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      path: '/sell-book'
    },
    {
      id: 'buy-material',
      title: 'Buy Project Material',
      description: 'Find project resources and materials',
      icon: Wrench,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      path: '/buy-project-material'
    },
    {
      id: 'sell-material',
      title: 'Sell Project Material',
      description: 'Share your project materials',
      icon: Share,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      path: '/sell-project-material'
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      
      <div className="max-w-4xl mx-auto">
        {/* Logo image at the top left */}


        {/* Welcome Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img 
              src="https://res.cloudinary.com/drnld9mgt/image/upload/v1750350718/Untitled_design_mgo9ct_gvacfp.png"
              alt="Site Icon"
              className="w-20 h-20 object-contain rounded-full shadow-lg animate-pulse transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Books & Project Materials Place
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted marketplace for college educational resources
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {navigationOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.id}
                onClick={() => navigate(option.path)}
                className={`bg-gradient-to-br ${option.color} ${option.hoverColor} rounded-2xl p-8 text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold">{option.title}</h2>
                </div>
                
                <p className="text-white text-opacity-90 mb-6 text-lg">
                  {option.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white text-opacity-75">
                    Click to continue
                  </span>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;