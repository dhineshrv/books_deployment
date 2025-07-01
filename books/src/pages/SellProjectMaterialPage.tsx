import React from 'react';
import { ArrowLeft, Share, Phone, Mail, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SellProjectMaterialPage = () => {
  const navigate = useNavigate();

  const adminContacts = [
    {
      name: "Admin",
      phone: "9384125235",
      email: "booksplace@gmail.com",
      whatsapp: "https://wa.me/15551234567"
    },
    {
      name: "Admin 2",
      phone: "9791796867",
      email: "booksplace@gmail.com",
      whatsapp: "https://wa.me/15559876543"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Sell Project Material</h1>
        </div>

        {/* Admin Only Notice */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
              <Share className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Admin Access Required
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Only the admin can upload project materials to maintain quality standards and ensure 
              all materials are properly tested and documented. Please contact any of the admins to list your project materials.
            </p>
          </div>

          {/* Admin Contact Cards */}
          <div className="space-y-6">
            {adminContacts.map((admin, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Contact {admin.name}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{admin.name}</p>
                      <p className="text-purple-600 font-medium">{admin.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-green-600 font-medium">{admin.email}</p>
                    </div>
                  </div>

                  <a
                    href={admin.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp {admin.name.split(' ')[1]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Material Submission Guidelines
          </h3>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Projects must be tested and fully functional</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Include comprehensive documentation and code comments</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Provide circuit diagrams and component lists for hardware projects</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Include step-by-step assembly and setup instructions</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Materials should be suitable for educational purposes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProjectMaterialPage;