import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';

const ServiceLayout = ({ 
  title, 
  subtitle, 
  heroImage = "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
  introduction,
  services,
  whyChoose,
  ctaText = "Schedule a Free Assessment"
}) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-deep-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6">{title}</h1>
            <p className="text-xl text-warm-gray leading-relaxed mb-10 font-body max-w-2xl">
              {subtitle}
            </p>
            <Link to="/contact" className="bg-healing-teal text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-warm-amber hover:text-deep-navy transition-all inline-block">
              {ctaText} →
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-charcoal leading-relaxed font-body italic">
            {introduction}
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-deep-navy mb-16 text-center">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-warm-gray">
                <div className="text-healing-teal mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-deep-navy mb-4">{service.title}</h3>
                <p className="text-charcoal font-body leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-healing-teal rounded-[3rem] p-10 md:p-16 text-white">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose HomeBridge?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoose.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white/20 p-1 rounded-full flex-shrink-0">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <p className="text-lg font-body font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-6">Not sure which service is right for you?</h2>
          <p className="text-lg text-charcoal mb-10 font-body">
            Our care coordinators will help you find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/contact" className="bg-healing-teal text-white font-bold px-10 py-4 rounded-full text-lg shadow-md hover:bg-opacity-90 transition-all">
              Take Our 2-Minute Care Quiz →
            </Link>
            <div className="flex items-center text-xl font-bold text-deep-navy">
              <span className="opacity-60 mr-3 text-base">or call</span>
              <a href="tel:5551234567" className="hover:text-healing-teal transition-colors underline underline-offset-8 decoration-healing-teal/30">(555) 123-4567</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
