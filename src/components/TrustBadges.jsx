import React from 'react';
import { CheckCircle } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    'Medicare & Medicaid Certified',
    'Licensed & Insured',
    'Background-Checked Caregivers',
    '24/7 Patient Support',
    '4.9/5 Patient Satisfaction',
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-warm-gray rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map((badge) => (
          <div key={badge} className="flex items-center space-x-3">
            <CheckCircle className="text-soothing-green flex-shrink-0" size={20} />
            <span className="text-deep-navy font-body font-semibold text-sm">{badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
