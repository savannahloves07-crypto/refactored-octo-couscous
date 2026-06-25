import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Skilled Nursing',
      description: 'Medical care at home — wound care, medication management, and chronic disease monitoring.',
      link: '/services/skilled-nursing'
    },
    {
      title: 'Physical Therapy',
      description: 'Regain strength and mobility with personalized PT sessions designed for your home environment.',
      link: '/services/physical-therapy'
    },
    {
      title: 'Occupational Therapy',
      description: 'Rediscover independence with adaptive techniques and home safety modifications.',
      link: '/services/occupational-therapy'
    },
    {
      title: 'Personal Care',
      description: 'Daily living support — bathing, dressing, meal prep, and compassionate companionship.',
      link: '/services/personal-care'
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'Contact us for a no-obligation phone call. We\'ll listen to your needs and answer your questions.'
    },
    {
      step: 2,
      title: 'In-Home Assessment',
      description: 'A nurse or therapist visits your home to evaluate your situation and recommend a care plan.'
    },
    {
      step: 3,
      title: 'Personalized Care Plan',
      description: 'We create a plan tailored to your medical needs, schedule, and match you with the right caregiver.'
    },
    {
      step: 4,
      title: 'Care Begins',
      description: 'Your dedicated caregiver starts visiting on your schedule. We monitor progress and adjust as needed.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-healing-teal/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-deep-navy sm:text-5xl mb-6">Complete Care, Under One Roof (Yours)</h1>
          <p className="max-w-3xl mx-auto text-xl text-charcoal leading-relaxed font-body">
            From skilled medical care to daily living support — everything you need to heal and thrive at home.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="bg-healing-teal text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-opacity-90 transition-all">
              Find Your Care Plan →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-lg border border-warm-gray hover:border-healing-teal transition-all flex flex-col items-start group">
                <h3 className="text-3xl font-bold text-deep-navy mb-6 group-hover:text-healing-teal transition-colors">{service.title}</h3>
                <p className="text-charcoal text-lg mb-8 flex-grow leading-relaxed">{service.description}</p>
                <Link to={service.link} className="flex items-center text-healing-teal font-bold text-xl">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-16 sm:text-4xl">Starting Care Is Simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-warm-gray -z-0"></div>
            
            {steps.map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-healing-teal rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg border-8 border-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-4">{item.title}</h3>
                <p className="text-charcoal font-body text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-deep-navy rounded-[3rem] overflow-hidden text-white shadow-2xl flex flex-col lg:flex-row">
            <div className="p-12 lg:p-20 lg:w-3/5">
              <h2 className="text-3xl font-bold mb-8 sm:text-4xl">We Work With You on Coverage</h2>
              <p className="text-lg text-warm-gray mb-10 leading-relaxed font-body">
                We accept a wide range of payment options to make care accessible:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  'Medicare (Part A & B)',
                  'Medicaid',
                  'Private Insurance (PPO/HMO)',
                  'Private Pay Packages',
                  'Veterans Benefits (VA)',
                  'HSA/FSA Eligible'
                ].map((option, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-healing-teal flex-shrink-0" size={20} />
                    <span className="font-body font-semibold">{option}</span>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-warm-gray italic font-body">
                Not sure what's covered? Our care coordinators will verify your benefits and explain everything — no surprises, no hidden fees.
              </p>
            </div>
            <div className="bg-healing-teal p-12 lg:p-20 lg:w-2/5 flex flex-col justify-center items-center text-center">
              <Phone size={64} className="mb-8 text-white/50" />
              <h3 className="text-2xl font-bold mb-4">Benefit Verification</h3>
              <p className="mb-8 font-body">Call us today for a free insurance review.</p>
              <a href="tel:5551234567" className="text-3xl font-extrabold hover:text-warm-amber transition-colors">(555) 123-4567</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-off-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-6">Need a hand finding the right fit?</h2>
          <p className="text-lg text-charcoal mb-10 font-body">
            Our care coordinators are here to listen and help you navigate your options.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-healing-teal text-white font-bold px-10 py-4 rounded-full text-lg shadow-md hover:bg-opacity-90 transition-all">
            Contact a Coordinator <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
