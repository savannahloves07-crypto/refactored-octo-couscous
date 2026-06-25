import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Heart, Activity, ClipboardList, Home as HomeIcon } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';

const Home = () => {
  const differences = [
    {
      icon: <Activity className="text-healing-teal" size={32} />,
      title: 'Clinical Excellence at Home',
      description: 'Licensed RNs, certified therapists, and evidence-based care plans — all in your home.'
    },
    {
      icon: <Heart className="text-healing-teal" size={32} />,
      title: 'Treated Like Family',
      description: "Consistent, vetted caregivers who build real relationships. We don't rotate strangers through your door."
    },
    {
      icon: <ClipboardList className="text-healing-teal" size={32} />,
      title: 'Custom Care Plans',
      description: 'Every patient gets a personalized plan — tailored to their medical needs, schedule, and comfort.'
    },
    {
      icon: <HomeIcon className="text-healing-teal" size={32} />,
      title: 'Faster Recovery, Fewer Readmissions',
      description: 'Healing in familiar surroundings speeds recovery and reduces hospital returns.'
    }
  ];

  const services = [
    {
      title: 'Skilled Nursing',
      description: 'Medical care at home — wound care, medication mgmt, disease monitoring.',
      link: '/services/skilled-nursing'
    },
    {
      title: 'Physical Therapy',
      description: 'Regain strength and mobility with personalized PT sessions.',
      link: '/services/physical-therapy'
    },
    {
      title: 'Occupational Therapy',
      description: 'Rediscover independence with adaptive techniques & home safety.',
      link: '/services/occupational-therapy'
    },
    {
      title: 'Personal Care',
      description: 'Daily living support — bathing, dressing, meal prep, companionship.',
      link: '/services/personal-care'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-off-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-deep-navy sm:text-5xl md:text-6xl">
                <span className="block">Caring for you,</span>
                <span className="block text-healing-teal">at home.</span>
              </h1>
              <p className="mt-6 text-xl text-charcoal font-body leading-relaxed">
                Skilled nursing, therapy, and daily support — delivered with compassion, right where you belong.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/services"
                  className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-healing-teal hover:bg-opacity-90 md:py-4 md:text-lg md:px-10 shadow-lg transition-all"
                >
                  Find Your Care Plan <ArrowRight size={20} className="ml-2" />
                </Link>
                <a
                  href="tel:5551234567"
                  className="flex items-center justify-center px-8 py-4 border-2 border-healing-teal text-base font-bold rounded-full text-healing-teal bg-transparent hover:bg-healing-teal hover:text-white md:py-4 md:text-lg md:px-10 transition-all"
                >
                  <Phone size={20} className="mr-2" /> (555) 123-4567
                </a>
              </div>
              
              <div className="mt-12">
                <TrustBadges />
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden transform lg:rotate-3">
                <div className="aspect-w-16 aspect-h-9 bg-healing-teal/10 flex items-center justify-center min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800" 
                    alt="Compassionate home care" 
                    className="object-cover w-full h-full opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
              The HomeBridge Difference
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-charcoal font-body">
              Recovering at home shouldn't mean compromising on quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differences.map((item, index) => (
              <div key={index} className="bg-off-white p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300 border-b-4 border-healing-teal shadow-sm">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-deep-navy mb-3">{item.title}</h3>
                <p className="text-charcoal font-body text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services At-a-Glance */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-charcoal font-body">
              A full range of home health services delivered by trained professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md flex flex-col h-full border border-warm-gray">
                <h3 className="text-xl font-bold text-deep-navy mb-3">{service.title}</h3>
                <p className="text-charcoal font-body text-sm mb-6 flex-grow">{service.description}</p>
                <Link to={service.link} className="text-healing-teal font-bold flex items-center hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center text-deep-navy font-bold hover:text-healing-teal transition-colors">
              View all services and coverage <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-16">What Our Families Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-off-white p-10 rounded-3xl relative">
              <div className="text-healing-teal text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
              <p className="text-charcoal font-body text-lg italic mb-6 relative z-10">
                After Mom's hip replacement, HomeBridge made all the difference. Her nurse was not only skilled but genuinely kind. We slept better knowing she was in such good hands.
              </p>
              <div className="font-bold text-deep-navy">— Sarah T., daughter of patient</div>
            </div>
            <div className="bg-off-white p-10 rounded-3xl relative border-t-4 border-warm-amber">
              <div className="text-healing-teal text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
              <p className="text-charcoal font-body text-lg italic mb-6 relative z-10">
                The physical therapy at home was so much more effective than going to a clinic. My therapist learned my home setup and designed exercises that actually fit my life. I'm walking without a cane now!
              </p>
              <div className="font-bold text-deep-navy">— Robert K., HomeBridge patient</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-healing-teal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to bring quality care home?</h2>
          <p className="text-xl font-body mb-12 opacity-90 leading-relaxed">
            Whether you're exploring options for yourself or a loved one, we're here to help. Your first consultation is free — we'll assess needs, answer questions, and create a personalized care plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/contact" className="bg-white text-healing-teal font-bold px-10 py-5 rounded-full text-xl shadow-xl hover:bg-warm-amber hover:text-deep-navy transition-all transform hover:scale-105">
              Schedule Your Free Consultation →
            </Link>
            <div className="flex items-center text-2xl font-bold">
              <span className="opacity-80 mr-3 text-lg">or call</span>
              <a href="tel:5551234567" className="hover:text-warm-amber transition-colors underline underline-offset-8 decoration-white/30">(555) 123-4567</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
