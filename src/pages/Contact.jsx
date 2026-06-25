import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    whoNeedsCare: '',
    typeOfCare: [],
    description: '',
    bestTime: ''
  });

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, typeOfCare: [...formData.typeOfCare, value] });
    } else {
      setFormData({ 
        ...formData, 
        typeOfCare: formData.typeOfCare.filter(item => item !== value) 
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-[60vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-soothing-green/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-soothing-green" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-deep-navy mb-4">Thank you!</h2>
          <p className="text-xl text-charcoal font-body leading-relaxed mb-10">
            A HomeBridge care coordinator will call you within 24 hours to discuss your needs.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-healing-teal font-bold hover:underline"
          >
            Back to contact form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-deep-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">Let's Talk About Your Care Needs</h1>
          <p className="max-w-3xl mx-auto text-xl text-warm-gray leading-relaxed font-body">
            Whether you're exploring options for yourself or a loved one, we're here to listen.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 mb-16 lg:mb-0">
              <h2 className="text-3xl font-bold text-deep-navy mb-8">Get in Touch</h2>
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="bg-off-white p-4 rounded-2xl mr-6">
                    <Phone className="text-healing-teal" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-navy text-lg mb-1">Phone</h3>
                    <p className="text-charcoal font-body mb-1">(555) 123-4567</p>
                    <p className="text-sm text-warm-gray font-body italic">Monday–Friday, 8:00 AM – 6:00 PM</p>
                    <p className="text-healing-teal font-bold mt-2">24/7 Support Line: (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-off-white p-4 rounded-2xl mr-6">
                    <Mail className="text-healing-teal" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-navy text-lg mb-1">Email</h3>
                    <p className="text-charcoal font-body">care@homebridgehealth.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-off-white p-4 rounded-2xl mr-6">
                    <MapPin className="text-healing-teal" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-navy text-lg mb-1">Office</h3>
                    <p className="text-charcoal font-body">
                      123 Care Lane, Suite 100<br />
                      [City, State ZIP]
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-off-white p-4 rounded-2xl mr-6">
                    <Clock className="text-healing-teal" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-navy text-lg mb-1">Service Area</h3>
                    <p className="text-charcoal font-body">[City/Region] and surrounding communities</p>
                  </div>
                </div>
              </div>

              {/* Referral Section */}
              <div className="mt-16 bg-healing-teal/5 p-8 rounded-[2rem] border border-healing-teal/10">
                <h3 className="text-2xl font-bold text-deep-navy mb-4">Referring a Patient?</h3>
                <p className="text-charcoal font-body mb-6">
                  Healthcare providers can submit referrals electronically or via our dedicated line.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-deep-navy text-white font-bold py-3 px-6 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center">
                    Submit a Referral <ArrowRight size={18} className="ml-2" />
                  </button>
                  <p className="text-center font-bold text-deep-navy">Call: (555) 123-4569</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-warm-gray">
                <h2 className="text-3xl font-bold text-deep-navy mb-8">Request a Free Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6 font-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-deep-navy mb-2">Full Name (required)</label>
                      <input 
                        type="text" required 
                        className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-healing-teal focus:ring-2 focus:ring-healing-teal/20 outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-deep-navy mb-2">Phone (required)</label>
                      <input 
                        type="tel" required 
                        className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-healing-teal focus:ring-2 focus:ring-healing-teal/20 outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-deep-navy mb-2">Email (required)</label>
                    <input 
                      type="email" required 
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-healing-teal focus:ring-2 focus:ring-healing-teal/20 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-deep-navy mb-2">Who needs care?</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-healing-teal focus:ring-2 focus:ring-healing-teal/20 outline-none transition-all"
                      value={formData.whoNeedsCare}
                      onChange={(e) => setFormData({...formData, whoNeedsCare: e.target.value})}
                    >
                      <option value="">Select an option</option>
                      <option value="Myself">Myself</option>
                      <option value="My loved one">My loved one</option>
                      <option value="A patient I refer">A patient I refer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-deep-navy mb-2">Type of care needed</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      {['Skilled Nursing', 'Physical Therapy', 'Occupational Therapy', 'Personal Care', 'Not sure yet'].map((item) => (
                        <label key={item} className="flex items-center space-x-3 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 rounded text-healing-teal focus:ring-healing-teal"
                            value={item}
                            onChange={handleCheckboxChange}
                          />
                          <span className="text-charcoal">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-deep-navy mb-2">Brief description of needs (optional)</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-healing-teal focus:ring-2 focus:ring-healing-teal/20 outline-none transition-all h-32"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-deep-navy mb-2">Best time to call</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-healing-teal focus:ring-2 focus:ring-healing-teal/20 outline-none transition-all"
                      value={formData.bestTime}
                      onChange={(e) => setFormData({...formData, bestTime: e.target.value})}
                    >
                      <option value="">Select an option</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-healing-teal text-white font-bold py-5 px-6 rounded-2xl hover:bg-opacity-90 transition-all text-xl shadow-lg mt-4"
                  >
                    Schedule My Free Consultation →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-16">Common Questions</h2>
          <div className="space-y-8">
            {[
              { q: "How soon can services start?", a: "In most cases, we can begin care within 24–48 hours of assessment." },
              { q: "Do I need a doctor's order?", a: "For skilled nursing and therapy services, a physician's order is required. We can help coordinate this with your doctor." },
              { q: "Are your services covered by insurance?", a: "Medicare, Medicaid, and many private insurance plans cover skilled home health services. Our team will verify your coverage before you start." },
              { q: "Can I choose my caregiver?", a: "Absolutely. We involve you in the matching process and make sure you're comfortable with your caregiver before services begin." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-warm-gray">
                <h3 className="text-xl font-bold text-deep-navy mb-3">Q: {faq.q}</h3>
                <p className="text-charcoal font-body leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
