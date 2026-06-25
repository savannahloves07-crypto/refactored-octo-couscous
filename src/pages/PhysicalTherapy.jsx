import React from 'react';
import { Play, Zap, ShieldAlert, Heart, Wind } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const PhysicalTherapy = () => {
  const services = [
    {
      icon: <Play size={32} />,
      title: 'Post-Surgery Rehabilitation',
      description: 'Hip/knee replacement, cardiac rehab, spinal surgery — guided recovery with your surgeon\'s protocol.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Injury Recovery',
      description: 'Falls, fractures, sports injuries — rebuilding strength and mobility safely in your home environment.'
    },
    {
      icon: <ShieldAlert size={32} />,
      title: 'Fall Prevention',
      description: 'Balance training, strength exercises, and home safety assessments to reduce your risk of falls.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Chronic Pain Management',
      description: 'Targeted exercises and manual therapy to manage arthritis, back pain, and other persistent conditions.'
    },
    {
      icon: <Wind size={32} />,
      title: 'Cardiopulmonary Rehab',
      description: 'Breathing exercises, endurance training, and energy conservation for heart and lung conditions.'
    }
  ];

  const whyChoose = [
    'Licensed Physical Therapists (PTs) only',
    'Therapy in your actual living space',
    'Exercises designed around your furniture',
    'Family and caregiver training included',
    'Progress shared directly with your doctor',
    'No waiting rooms or stressful commutes'
  ];

  return (
    <ServiceLayout
      title="Physical Therapy — Recover Strength Where You Live"
      subtitle="Your home is your recovery space. Our licensed PTs design personalized programs that fit your life and your goals."
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
      introduction="Our in-home physical therapy helps you regain strength, mobility, and confidence — without the hassle of traveling to a clinic."
      services={services}
      whyChoose={whyChoose}
      ctaText="Request a PT Evaluation"
    />
  );
};

export default PhysicalTherapy;
