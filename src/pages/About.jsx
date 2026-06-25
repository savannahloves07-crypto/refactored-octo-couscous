import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Users, Zap, Globe, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="text-healing-teal" size={24} />,
      title: 'Compassion First',
      description: "Every interaction starts with empathy and respect for the patient's dignity. We listen before we act."
    },
    {
      icon: <ShieldCheck className="text-healing-teal" size={24} />,
      title: 'Clinical Excellence',
      description: 'We hold ourselves to the highest standards of care — certified, accountable, and continuously improving.'
    },
    {
      icon: <Users className="text-healing-teal" size={24} />,
      title: 'Trust & Transparency',
      description: 'Families deserve clear communication, honest guidance, and complete transparency about their loved one\'s care.'
    },
    {
      icon: <Zap className="text-healing-teal" size={24} />,
      title: 'Independence',
      description: 'We empower patients to maintain their autonomy and quality of life for as long as possible — on their own terms.'
    },
    {
      icon: <Globe className="text-healing-teal" size={24} />,
      title: 'Community',
      description: 'Every patient is part of our extended family. We don\'t just provide care — we build relationships.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-deep-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">Our Story — Bringing Quality Care Home</h1>
          <p className="max-w-3xl mx-auto text-xl text-warm-gray leading-relaxed">
            HomeBridge connects hospital-level expertise with the warmth of home-based care.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-charcoal font-body leading-relaxed max-w-none">
            <p className="mb-8">
              HomeBridge Health Services was born from a simple belief: that recovering from illness or managing a chronic condition shouldn't mean leaving the comfort of home.
            </p>
            <p className="mb-8">
              Our founders — experienced healthcare professionals who spent years in hospitals and rehab facilities — saw the same pattern again and again. Patients healed faster, felt safer, and smiled more when they could recover in their own space. But too often, families struggled to find trustworthy, skilled care that could come to them.
            </p>
            <div className="bg-off-white p-8 rounded-3xl border-l-8 border-healing-teal mb-8 italic text-2xl text-deep-navy font-heading font-bold">
              So we built the bridge.
            </div>
            <p className="mb-8">
              HomeBridge connects hospital-level expertise with the warmth of home-based care. Every nurse, therapist, and caregiver on our team is carefully selected, thoroughly vetted, and trained to treat each patient with the dignity and respect they deserve.
            </p>
            <p className="font-bold text-deep-navy text-xl">
              We're not just a service provider. We're a partner in your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-16">What Drives Us</h2>
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h3 className="text-2xl font-bold text-healing-teal mb-4">Mission</h3>
            <p className="text-xl italic text-charcoal">
              To deliver compassionate, professional healthcare in the comfort of home — bridging the gap between clinical excellence and the healing power of familiar surroundings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-warm-gray">
                <div className="bg-off-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-deep-navy mb-4">{value.title}</h4>
                <p className="text-charcoal font-body leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">Meet the People Behind Your Care</h2>
          <p className="text-lg text-charcoal mb-12 text-center">
            Behind every HomeBridge visit is a team of dedicated professionals who genuinely love what they do. Every team member shares one goal: your well-being.
          </p>
          
          <div className="bg-off-white rounded-3xl p-10 shadow-inner">
            <h3 className="text-xl font-bold text-deep-navy mb-6 text-center">All HomeBridge clinicians are:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Licensed and certified in their specialty',
                'Background-checked and reference-verified',
                'Trained in our Compassionate Care approach',
                'Continuously evaluated for quality and satisfaction'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-healing-teal rounded-full p-1 mr-3 mt-1">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                  <span className="font-body font-semibold text-deep-navy">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center text-charcoal italic border-t border-warm-gray pt-8">
              We assign caregivers consistently — so your loved one sees the same familiar face, not a rotating roster of strangers.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Audience CTA */}
      <section className="py-20 border-t border-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-healing-teal/10 p-12 rounded-3xl flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-deep-navy mb-4">For Patients & Families</h3>
              <p className="text-charcoal mb-8">Discover how HomeBridge can support you or your loved one.</p>
              <Link to="/services" className="bg-healing-teal text-white font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
                Find Your Care Plan →
              </Link>
            </div>
            <div className="bg-deep-navy p-12 rounded-3xl flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">For Referring Providers</h3>
              <p className="text-warm-gray mb-8">Learn about our referral process, care coordination, and outcomes.</p>
              <Link to="/contact" className="bg-white text-deep-navy font-bold px-8 py-3 rounded-full hover:bg-off-white transition-all">
                Partner With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
