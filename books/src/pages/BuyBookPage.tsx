import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
import ContactModal from '../components/ContactModal';
import BookSuggestionModal from '../components/BookSuggestionModal';

const BuyBookPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  

  // Mock book data with multiple images
  const books = [
    {
      id: 1,
      title: "Tamil Book",
      author: "A.Boolan",
      originalPrice: 395,
      sellingPrice: 250,
      category: "Tamil",
      condition: "New",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908031/IMG_2667_dnj4mi.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908032/IMG_2666_klkp81.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908031/IMG_2665_monto3.jpg"
      ]
    },
    {
      id: 2,
      title: "Engineering Matherematics",
      author: "Ravish R singh,Mukul Bhatt",
      originalPrice: 1200,
      sellingPrice: 680,
      category: "Mathematics",
      condition: "Excellent",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908039/IMG_2664_mwemao.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908040/IMG_2662_hwscui.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908038/IMG_2663_hnma34.jpg"
      ]
    },
    {
      id: 3,
      title: "Electrical Technology",
      author: "B.L.Theraja, A.K.TherajaSX",
      originalPrice: 750,
      sellingPrice: 375,
      category: "Electrical",
      condition: "New",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908612/IMG_2670_tl63ak.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908612/IMG_2669_iya0ld.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908040/IMG_2668_lxhxlz.jpg"
      ]
    },
    {
      id: 4,
      title: "Computer Fundamentals & Programming ",
      author: "R.S. Salaria",
      originalPrice: 950,
      sellingPrice: 520,
      category: "computer Science",
      condition: "Very Good",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908034/IMG_2658_wdc88x.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908035/IMG_2656_kpbrql.jpg",
      "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908036/IMG_2657_fcp2zf.jpg"
      ]
    },
    {
      id: 5,
      title: "Tamils & Technology",
      author: "Dr.N.Kavitha",
      originalPrice: 800,
      sellingPrice: 420,
      category: "Tamil",
      condition: "New",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908035/IMG_2677_a3trws.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908033/IMG_2676_fblvs5.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1749908033/IMG_2675_zg5bb1.jpg"
      ]
    },
    {
      id: 6,
      title: "Communication Skills",
      author: "Sanjay Kumar,Pushp Lata",
      originalPrice: 600,
      sellingPrice: 300,
      category: "English",
      condition: "Excellent",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141449/IMG_2705_gq41zz.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141443/IMG_2703_vnbrfb.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141445/IMG_2704_ac5wkx.jpg"
      ]
    },
    {
      id: 7,
      title: "Programming in C",
      author: "Reema Thareja",
      originalPrice: 900,
      sellingPrice: 300,
      category: "Computer Science",
      condition: "Excellent",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141443/IMG_2700_k3fwz0.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141448/IMG_2701_nzmszd.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141456/IMG_2702_wxkht0.jpg"
      ]
    },
    {
      id: 8,
      title: "Engineering physics",
      author: "M N Avadhanulu, P G Kshirsagar",
      originalPrice: 775,
      sellingPrice: 500,
      category: "Physics",
      condition: "Excellent",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141450/IMG_2696_conqny.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141452/IMG_2694_tj7zgz.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141458/IMG_2695_vv9ou5.jpg"
      ]
    },
    {
      id: 9,
      title: "Circutits And Networks",
      author: "A. Sudhakar, Shyammohan S Palli",
      originalPrice: 675,
      sellingPrice: 400,
      category: "Circuits",
      condition: "Excellent",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141462/IMG_2707_luzexv.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141457/IMG_2708_bgrboj.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750141463/IMG_2706_bklim6.jpg"
      ]
    },
    {
      id: 10,
      title: "Engineering Chemistry",
      author: "Wiley",
      originalPrice: 675,
      sellingPrice: 400,
      category: "Chemistry",
      condition: "Excellent",
      images: [
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750145859/IMG_20250614_211113_lfa1or.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750145852/IMG_20250614_211142_bujurg.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750145860/IMG_20250614_211130_ftfqfj.jpg"
      ]
    },
    {
      id: 11,
      title: "Engineering Physics",
      author: "V. Rajendran",
      originalPrice: 675,
      sellingPrice: 400,
      category: "Physics",
      condition: "Excellent",
      images: [
       "https://res.cloudinary.com/drnld9mgt/image/upload/v1750145852/IMG_20250614_212718_bcphup.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750145854/IMG_20250614_212741_xrbois.jpg",
      ]
    },
    {
      id: 12,
      title: "Basic Mechanical Engineering",
      author: "k. Venugopal v. Prabhuraja",
      originalPrice: 500,
      sellingPrice: 250,
      category: "Mechanical Engineering",
      condition: "Good",
      images: [
       "https://res.cloudinary.com/drnld9mgt/image/upload/v1750148661/IMG_2716_dutane.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750148655/IMG_2715_mgfmqg.jpg",
      ]
    },
    {
      id: 13,
      title: "Heat and Mass Transfer data book",
      author: "c. P. kothandaraman s. Subramanyan",
      originalPrice: 224,
      sellingPrice: 100,
      category: "Mechanical Engineering",
      condition: "Good",
      images: [
       "https://res.cloudinary.com/drnld9mgt/image/upload/v1750148656/IMG_2728_j1to5f.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750148634/IMG_2728_a5s3lr.jpg",
      ]
    },
    {
      id: 14,
      title: "Applied Electronics",
      author: "s. chand dr.r. S. K. seetha",
      originalPrice: 735,
      sellingPrice: 400,
      category: "Mechanical Engineering",
      condition: "Good",
      images: [
       "https://res.cloudinary.com/drnld9mgt/image/upload/v1750168435/IMG_2733_gxfkmu.jpg",
        "https://res.cloudinary.com/drnld9mgt/image/upload/v1750168436/IMG_2732_b1lwgp.jpg",
      ]
    },
    {
      id: 15,
      title: "Steam tables with Mollier Diagram",
      author: "S. Chand",
      originalPrice: 110,
      sellingPrice: 40,
      category: "Mechanical Engineering",
      condition: "Good",
      images: [
       "https://res.cloudinary.com/drnld9mgt/image/upload/v1750168614/IMG_2726_ydom3q.jpg",
        
      ]
    },

  
    

       
    
    
  ];

  const categories = ['all', 'Computer Science', 'Chemistry', 'Mathematics', 'Economics', 'Electronics','Tamil'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBuyNow = (book: any) => {
    setSelectedBook(book);
    setShowContactModal(true);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Buy Books</h1>
          </div>
          
          {/* Suggest Book Button */}
          <button
            onClick={() => setShowSuggestionModal(true)}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Lightbulb className="w-5 h-5 mr-2" />
            Suggest a Book
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onBuyNow={handleBuyNow}
            />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4" />
              <p className="text-xl">No books found</p>
              <p className="text-gray-500 mb-6">Try adjusting your search criteria</p>
              <button
                onClick={() => setShowSuggestionModal(true)}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 flex items-center mx-auto"
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Suggest the book you're looking for
              </button>
            </div>
          </div>
        )}

        {/* Contact Modal */}
        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
          item={selectedBook}
          type="book"
        />

        {/* Book Suggestion Modal */}
        <BookSuggestionModal
          isOpen={showSuggestionModal}
          onClose={() => setShowSuggestionModal(false)}
        />
      </div>
    </div>
  );
};

export default BuyBookPage;