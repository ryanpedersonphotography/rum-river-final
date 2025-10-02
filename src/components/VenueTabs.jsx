import React from 'react';

/**
 * VenueTabs Component
 * Reusable tab navigation for venue/category selection
 * Follows button system rules with venue-tab class
 */
export const VenueTabs = ({ 
  tabs, 
  activeTab, 
  onChange,
  className = '' 
}) => {
  return (
    <div className={`venue-tabs ${className}`}>
      {tabs.map(tab => (
        <button
          key={tab.key}
          type="button"
          className={`venue-tab ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => onChange(tab.key)}
          aria-pressed={activeTab === tab.key}
          aria-label={`View ${tab.label}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default VenueTabs;