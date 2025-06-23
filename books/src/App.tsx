import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectionPage from './pages/SelectionPage';
import BuyBookPage from './pages/BuyBookPage';
import SellBookPage from './pages/SellBookPage';
import BuyProjectMaterialPage from './pages/BuyProjectMaterialPage';
import SellProjectMaterialPage from './pages/SellProjectMaterialPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Routes>
          <Route path="/" element={<SelectionPage />} />
          <Route path="/buy-book" element={<BuyBookPage />} />
          <Route path="/sell-book" element={<SellBookPage />} />
          <Route path="/buy-project-material" element={<BuyProjectMaterialPage />} />
          <Route path="/sell-project-material" element={<SellProjectMaterialPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;