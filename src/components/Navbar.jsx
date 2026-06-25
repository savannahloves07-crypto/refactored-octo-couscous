import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Skilled Nursing', path: '/services/skilled-nursing' },
    { name: 'Physical Therapy', path: '/services/physical-therapy' },
    { name: 'Occupational Therapy', path: '/services/occupational-therapy' },
    { name: 'Personal Care', path: '/services/personal-care' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-12 w-auto" src="/logo.svg" alt="HomeBridge Health Services" />
              <div className="ml-3 hidden md:block">
                <span className="block text-healing-teal font-heading font-extrabold text-xl leading-none">HomeBridge</span>
                <span className="block text-deep-navy font-body text-xs uppercase tracking-wider">Health Services</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.name === 'Services' ? (
                  <div className="flex items-center">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-deep-navy hover:text-healing-teal font-body font-semibold px-3 py-2 transition-colors ${
                          isActive ? 'text-healing-teal' : ''
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 top-full">
                      <div className="py-1">
                        {servicesLinks.map((sLink) => (
                          <Link
                            key={sLink.name}
                            to={sLink.path}
                            className="block px-4 py-2 text-sm text-deep-navy hover:bg-off-white hover:text-healing-teal"
                          >
                            {sLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-deep-navy hover:text-healing-teal font-body font-semibold px-3 py-2 transition-colors ${
                        isActive ? 'text-healing-teal' : ''
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
            <a
              href="tel:5551234567"
              className="flex items-center text-healing-teal font-body font-bold border-2 border-healing-teal px-4 py-2 rounded-full hover:bg-healing-teal hover:text-white transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (555) 123-4567
            </a>
            <Link
              to="/contact"
              className="bg-healing-teal text-white font-body font-bold px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors shadow-sm"
            >
              Get Care Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-deep-navy hover:text-healing-teal focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-warm-gray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-semibold ${
                      isActive ? 'text-healing-teal bg-off-white' : 'text-deep-navy hover:text-healing-teal hover:bg-off-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
                {link.name === 'Services' && (
                  <div className="pl-4 space-y-1">
                    {servicesLinks.map((sLink) => (
                      <Link
                        key={sLink.name}
                        to={sLink.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-deep-navy hover:text-healing-teal hover:bg-off-white"
                      >
                        {sLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="pt-4 pb-2 border-t border-warm-gray mt-2">
              <a
                href="tel:5551234567"
                className="flex items-center px-3 py-2 text-healing-teal font-bold"
              >
                <Phone size={18} className="mr-2" />
                (555) 123-4567
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mx-3 mt-2 bg-healing-teal text-white text-center font-bold px-6 py-3 rounded-full shadow-sm"
              >
                Get Care Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
