import React from 'react';
import { Sparkles, Shirt, Soup, Trash2, Bell, Car, Users } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const PersonalCare = () => {
  const services = [
    {
      icon: <Sparkles size={32} />,
      title: 'Bathing & Hygiene',
      description: 'Gentle, respectful help with oral care, personal hygiene, and bathing while preserving dignity.'
    },
    {
      icon: <Shirt size={32} />,
      title: 'Dressing & Grooming',
      description: 'Assistance selecting clothes, dressing, and skincare — helping your loved one feel their best.'
    },
    {
      icon: <Soup size={32} />,
      title: 'Meal Preparation',
      description: 'Nutritious meals prepared for dietary needs, including diabetes and heart health special diets.'
    },
    {
      icon: <Trash2 size={32} />,
      title: 'Light Housekeeping',
      description: 'Tidying, laundry, dishes, and maintaining a safe, clean, and organized living space.'
    },
    {
      icon: <Bell size={32} />,
      title: 'Medication Reminders',
      description: 'Gentle reminders to take medications on schedule, coordinated with nursing if needed.'
    },
    {
      icon: <Car size={32} />,
      title: 'Transportation',
      description: 'Rides and accompaniment to medical appointments, errands, or local social outings.'
    }
  ];

  const whyChoose = [
    'Background-checked & reference-verified',
    'Trained in Compassionate Care approach',
    'Matched to personality and care needs',
    'Same-caregiver consistency (no rotation)',
    '24/7 transparent family updates',
    'Flexible hourly or package options'
  ];

  return (
    <div className="bg-white">
      <ServiceLayout
        title="Personal Care — Dignity, Comfort, and Company"
        subtitle="Sometimes the greatest gift is having someone who truly cares — helping with life's daily tasks, and brightening each day."
        heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
        introduction="Our personal care services are designed for seniors and individuals who need a little extra help to live safely and comfortably at home. Whether it's a few hours a week or full-time support — we're here."
        services={services}
        whyChoose={whyChoose}
        ctaText="Find a Caregiver"
      />
      
      {/* Pricing Note Section */}
      <section className="py-20 bg-off-white border-t border-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-warm-gray">
            <h3 className="text-2xl font-bold text-deep-navy mb-6">Payment & Coverage</h3>
            <div className="space-y-6 font-body text-charcoal text-lg leading-relaxed">
              <p>
                Personal care services are available on a <strong>private-pay basis</strong>, with flexible scheduling from a few hours per week to 24/7 support. Ask about our monthly packages for regular visits.
              </p>
              <p>
                Medicare and Medicaid may cover certain personal care services when coordinated with skilled nursing or therapy. Our care coordinators will help you understand your coverage.
              </p>
            </div>
            <div className="mt-10 flex items-center p-6 bg-healing-teal/5 rounded-2xl border border-healing-teal/20">
              <Users className="text-healing-teal mr-4 flex-shrink-0" size={32} />
              <p className="font-body font-semibold text-deep-navy">
                We take the time to match caregivers with clients based on personality and interests — so every visit feels like time with a friend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalCare;
