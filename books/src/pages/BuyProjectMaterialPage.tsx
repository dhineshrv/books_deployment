import React, { useState } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactModal from '../components/ContactModal';

const BuyProjectMaterialPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);

  // No project materials currently available
  const projectMaterials: any[] = [];

  const departments = [
    'all',
    'Computer Science',
    'Environmental Engineering',
    'Data Science',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Finance'
  ];

  const filteredMaterials = projectMaterials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === 'all' || material.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleBuyNow = (material: any) => {
    setSelectedMaterial(material);
    setShowContactModal(true);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Buy Project Materials</h1>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search project materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled
              >
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department === 'all' ? 'All Departments' : department}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Materials</h2>
          <p className="text-gray-600 text-lg">Available soon. Stay tuned!</p>
        </div>

        {/* Contact Modal (kept for future use) */}
        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
          item={selectedMaterial}
          type="material"
        />
      </div>
    </div>
  );
};

export default BuyProjectMaterialPage;
