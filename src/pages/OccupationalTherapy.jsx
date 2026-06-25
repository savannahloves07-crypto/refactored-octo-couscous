import React from 'react';
import { ShowerHead, Utensils, Home, Brain, Accessibility, Battery } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const OccupationalTherapy = () => {
  const services = [
    {
      icon: <ShowerHead size={32} />,
      title: 'Activities of Daily Living',
      description: 'Adaptive techniques for bathing, dressing, grooming, and toileting to maintain independence.'
    },
    {
      icon: <Utensils size={32} />,
      title: 'Home Management',
      description: 'Meal preparation, cleaning, laundry, and household tasks — adapted to your unique abilities.'
    },
    {
      icon: <Home size={32} />,
      title: 'Home Safety Assessments',
      description: 'We evaluate fall risks and recommend modifications like grab bars, ramps, and improved lighting.'
    },
    {
      icon: <Brain size={32} />,
      title: 'Cognitive Rehabilitation',
      description: 'Memory strategies and routines for patients recovering from stroke or managing dementia.'
    },
    {
      icon: <Accessibility size={32} />,
      title: 'Adaptive Equipment Training',
      description: 'Learning to use walkers, reachers, and dressing aids safely and effectively.'
    },
    {
      icon: <Battery size={32} />,
      title: 'Energy Conservation',
      description: 'Pacing strategies for patients with chronic fatigue, heart conditions, or limited endurance.'
    }
  ];

  const whyChoose = [
    'Licensed Occupational Therapists (OTR/L)',
    'Realistic, home-based recommendations',
    'Comprehensive approach with PT and nursing',
    'Caregiver and family training included',
    'Direct coordination with your physician',
    'Follow-up visits for all modifications'
  ];

  return (
    <ServiceLayout
      title="Occupational Therapy — Independence Starts at Home"
      subtitle="From getting dressed to preparing meals, our licensed OTs help you do the things that matter most — safely and confidently."
      heroImage="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800"
      introduction="Occupational therapy is about making daily life work for you. Our therapists assess your home environment and help you adapt — so you can keep doing what you love."
      services={services}
      whyChoose={whyChoose}
      ctaText="Request an OT Evaluation"
    />
  );
};

export default OccupationalTherapy;
