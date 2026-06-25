import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview';
import SkilledNursing from './pages/SkilledNursing';
import PhysicalTherapy from './pages/PhysicalTherapy';
import OccupationalTherapy from './pages/OccupationalTherapy';
import PersonalCare from './pages/PersonalCare';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/skilled-nursing" element={<SkilledNursing />} />
            <Route path="/services/physical-therapy" element={<PhysicalTherapy />} />
            <Route path="/services/occupational-therapy" element={<OccupationalTherapy />} />
            <Route path="/services/personal-care" element={<PersonalCare />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
