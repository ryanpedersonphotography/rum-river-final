import React from 'react';
import Button from '../components/Button/Button';

// Mock Section component for testing button contrast
const Section = ({ variant = 'default', tone = 'neutral', py = 'md', children, ...props }) => {
  const backgrounds = {
    neutral: { default: '#FBF8F4', muted: '#FAF6F2', solid: '#2C2416' },
    brown: { default: '#FBF8F4', muted: '#F4E4E1', solid: '#6B4E3D' },
    green: { default: '#FBF8F4', muted: '#F0F4F0', solid: '#3A4A3C' },
    gold: { default: '#FBF8F4', muted: '#FFF8E7', solid: '#C97D60' }
  };
  
  const padding = { sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' };
  const color = variant === 'solid' ? '#FFFFFF' : '#2C2416';
  
  return (
    <section 
      style={{ 
        background: backgrounds[tone][variant], 
        color,
        padding: `${padding[py]} 2rem`,
        minHeight: '200px'
      }}
      {...props}
    >
      {children}
    </section>
  );
};

export default {
  title: 'Layout/Section',
  component: Section,
  argTypes: {
    variant: { control: 'select', options: ['default','muted','solid'] },
    tone: { control: 'select', options: ['neutral','brown','green','gold'] },
    align: { control: 'select', options: ['left','center'] },
    py: { control: 'select', options: ['sm','md','lg','xl'] },
  },
};

export const Playground = (args) => (
  <Section {...args}>
    <h2>Section Title</h2>
    <p>Body copy for contrast check.</p>
    <div style={{ display:'flex', gap:12, marginTop:12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button as="a" href="#" variant="link">Link</Button>
    </div>
  </Section>
);
Playground.args = { variant:'muted', tone:'brown', py:'lg' };

export const Matrix = () => (
  <div style={{ display:'grid', gap:24 }}>
    {['neutral','brown','green','gold'].map(tone => (
      <div key={tone} style={{ display:'grid', gap:12 }}>
        {['default','muted','solid'].map(variant => (
          <Section key={variant} tone={tone} variant={variant} py="md">
            <strong>{tone} • {variant}</strong>
            <p>Contrast check text.</p>
            <div style={{ display:'flex', gap:12, marginTop:12 }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button as="a" href="#" variant="link">Link</Button>
            </div>
          </Section>
        ))}
      </div>
    ))}
  </div>
);