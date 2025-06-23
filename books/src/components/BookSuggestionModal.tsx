import React, { useState } from 'react';
import { X, Lightbulb, User, Phone, BookOpen, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface BookSuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookSuggestionModal = ({ isOpen, onClose }: BookSuggestionModalProps) => {
  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: '',
    bookTitle: '',
    authorName: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName.trim() || !formData.mobileNumber.trim() || !formData.bookTitle.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.userName,
        from_email: 'booksplace@gmail.com',
        to_email: 'booksplace@gmail.com',
        mobile_number: formData.mobileNumber,
        book_title: formData.bookTitle,
        author_name: formData.authorName || 'Not specified',
        additional_notes: formData.additionalNotes || 'None',
        timestamp: new Date().toLocaleString()
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_ehntzlh', // Replace with your EmailJS service ID
        'template_ioz81v9', // Replace with your EmailJS template ID
        templateParams,
        '6BQuq5_IWNu6GV4Bm' // Replace with your EmailJS public key
      );

      // Store in localStorage as backup
      const existingSuggestions = JSON.parse(localStorage.getItem('bookSuggestions') || '[]');
      existingSuggestions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('bookSuggestions', JSON.stringify(existingSuggestions));

      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      // Still show success to user and store locally
      const existingSuggestions = JSON.parse(localStorage.getItem('bookSuggestions') || '[]');
      existingSuggestions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('bookSuggestions', JSON.stringify(existingSuggestions));
      setIsSubmitted(true);
    }

    setIsSubmitting(false);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormData({
        userName: '',
        mobileNumber: '',
        bookTitle: '',
        authorName: '',
        additionalNotes: ''
      });
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Suggestion Sent!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for your book suggestion. The admin has been notified via email and will review your request.
          </p>
          <p className="text-sm text-gray-500">
            This window will close automatically...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Suggest a Book</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Can't find the book you're looking for? Suggest it to us and we'll try to add it to our collection!
          </p>

          <div className="space-y-4">
            {/* User Name */}
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Your Name *
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Mobile Number *
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            {/* Book Title */}
            <div>
              <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700 mb-2">
                <BookOpen className="w-4 h-4 inline mr-2" />
                Book Title *
              </label>
              <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter the book title"
                required
              />
            </div>

            {/* Author Name */}
            <div>
              <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-2">
                Author Name
              </label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                value={formData.authorName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter the author name (optional)"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Any additional information about the book (edition, publisher, etc.)"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting || !formData.userName.trim() || !formData.mobileNumber.trim() || !formData.bookTitle.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending Suggestion...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Suggestion
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="p-6 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-gray-500 text-center">
            Your suggestion will be sent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookSuggestionModal;