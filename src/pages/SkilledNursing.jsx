import React from 'react';
import { Stethoscope, Pill, Heart, Clipboard, Activity, Share2 } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const SkilledNursing = () => {
  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: 'Wound Care',
      description: 'Surgical wound management, pressure ulcer treatment, dressing changes, and infection prevention.'
    },
    {
      icon: <Pill size={32} />,
      title: 'Medication Management',
      description: 'Comprehensive review, administration, monitoring for side effects, and physician coordination.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Chronic Disease Management',
      description: 'Specialized education and monitoring for diabetes, heart disease, hypertension, and COPD.'
    },
    {
      icon: <Clipboard size={32} />,
      title: 'Post-Surgery Recovery',
      description: 'Incision monitoring, pain management, and early detection of complications after discharge.'
    },
    {
      icon: <Activity size={32} />,
      title: 'IV Therapy & Injections',
      description: 'Antibiotic therapy, hydration, and other IV treatments administered by licensed RNs.'
    },
    {
      icon: <Share2 size={32} />,
      title: 'Care Coordination',
      description: 'We communicate directly with your doctors and family to keep everyone informed and aligned.'
    }
  ];

  const whyChoose = [
    'Licensed Registered Nurses (RNs) only',
    'Medicare/Medicaid certified agency',
    'Same-nurse consistency for every visit',
    '24/7 clinical support line for patients',
    'Comprehensive physician-aligned care plans',
    'Evidence-based clinical protocols'
  ];

  return (
    <ServiceLayout
      title="Skilled Nursing — Hospital-Level Care at Home"
      subtitle="Our registered nurses bring clinical expertise and genuine compassion to your living room."
      heroImage="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
      introduction="Our skilled nursing services are designed for patients who need medical care but don't require hospitalization. Whether recovering from surgery, managing a chronic condition, or needing ongoing monitoring — we're here."
      services={services}
      whyChoose={whyChoose}
      ctaText="Request a Nursing Assessment"
    />
  );
};

export default SkilledNursing;
