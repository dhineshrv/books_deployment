import React from 'react';
import { X, Phone, Mail, MessageCircle, User } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  type: 'book' | 'material';
}

const ContactModal = ({ isOpen, onClose, item, type }: ContactModalProps) => {
  if (!isOpen || !item) return null;

  const adminContacts = [
    {
      name: "Admin",
      phone: "7339664585,9384125235",
      email: "booksplace@gmail.com",
      whatsapp: "https://wa.me/9384125235"
    },
    {
      name: "Admin 2",
      phone: "9791796867",
      email: "booksplace@gmail.com",
      whatsapp: "https://wa.me/9791796867"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Contact Admin</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Item Details */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start space-x-4">
            <img
              src={item.images ? item.images[0] : item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              {type === 'book' ? (
                <p className="text-sm text-gray-600">by {item.author}</p>
              ) : (
                <p className="text-sm text-gray-600">{item.department}</p>
              )}
              <p className="text-lg font-bold text-green-600 mt-1">
                ₹{type === 'book' ? item.sellingPrice : item.price}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Contact any of the admins to purchase this {type}. No online payment required - deal directly with the admin.
          </p>

          <div className="space-y-6">
            {adminContacts.map((admin, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                {/* Admin Info */}
                <div className="flex items-center p-3 bg-blue-50 rounded-lg mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{admin.name}</p>
                    <p className="text-sm text-blue-600">Administrator</p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-3">
                  {/* Phone */}
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-green-600 font-medium text-sm">{admin.phone}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-red-600 font-medium text-sm">{admin.email}</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={admin.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp {admin.name.split(' ')[1]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-gray-500 text-center">
            All transactions are handled directly with the admin. Please mention the {type} title when contacting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;