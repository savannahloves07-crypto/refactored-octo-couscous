import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Tagline */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="bg-white p-2 rounded-lg">
                <img className="h-10 w-auto" src="/logo.svg" alt="HomeBridge Health Services" />
              </div>
              <div className="ml-3">
                <span className="block text-healing-teal font-heading font-extrabold text-xl leading-none">HomeBridge</span>
                <span className="block text-white font-body text-xs uppercase tracking-wider">Health Services</span>
              </div>
            </Link>
            <p className="text-warm-gray font-body italic">
              Caring for you, at home.
            </p>
            <div className="space-y-3">
              <a href="tel:5551234567" className="flex items-center text-warm-gray hover:text-healing-teal transition-colors">
                <Phone size={18} className="mr-3 text-healing-teal" />
                (555) 123-4567
              </a>
              <a href="mailto:care@homebridgehealth.com" className="flex items-center text-warm-gray hover:text-healing-teal transition-colors">
                <Mail size={18} className="mr-3 text-healing-teal" />
                care@homebridgehealth.com
              </a>
              <div className="flex items-start text-warm-gray">
                <MapPin size={18} className="mr-3 text-healing-teal mt-1 flex-shrink-0" />
                <span>123 Care Lane, Suite 100<br />[City, State ZIP]</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 border-b border-healing-teal pb-2 w-12">Services</h3>
            <ul className="space-y-4 font-body">
              <li><Link to="/services/skilled-nursing" className="text-warm-gray hover:text-healing-teal transition-colors">Skilled Nursing</Link></li>
              <li><Link to="/services/physical-therapy" className="text-warm-gray hover:text-healing-teal transition-colors">Physical Therapy</Link></li>
              <li><Link to="/services/occupational-therapy" className="text-warm-gray hover:text-healing-teal transition-colors">Occupational Therapy</Link></li>
              <li><Link to="/services/personal-care" className="text-warm-gray hover:text-healing-teal transition-colors">Personal Care</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 border-b border-healing-teal pb-2 w-12">Company</h3>
            <ul className="space-y-4 font-body">
              <li><Link to="/about" className="text-warm-gray hover:text-healing-teal transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-warm-gray hover:text-healing-teal transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-warm-gray hover:text-healing-teal transition-colors">Refer a Patient</Link></li>
              <li><Link to="/contact" className="text-warm-gray hover:text-healing-teal transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 border-b border-healing-teal pb-2 w-12">Resources</h3>
            <ul className="space-y-4 font-body">
              <li><Link to="/contact" className="text-warm-gray hover:text-healing-teal transition-colors">FAQ</Link></li>
              <li><Link to="/services" className="text-warm-gray hover:text-healing-teal transition-colors">Insurance Guide</Link></li>
              <li><Link to="/" className="text-warm-gray hover:text-healing-teal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-warm-gray hover:text-healing-teal transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-warm-gray font-body">
            &copy; {new Date().getFullYear()} HomeBridge Health Services. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-warm-gray/60 uppercase tracking-widest font-body font-semibold">
            Medicare/Medicaid Certified | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
