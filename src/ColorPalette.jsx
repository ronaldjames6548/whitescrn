import React, { useState } from 'react';

const ColorPalette = () => {
  const colors = [
    { name: 'Black', bg: 'bg-black', hex: '#000000' },
    { name: 'Shadow Gray', bg: 'bg-gray-900', hex: '#111827' },
    { name: 'Charcoal', bg: 'bg-gray-800', hex: '#1F2937' },
    { name: 'Slate Gray', bg: 'bg-gray-600', hex: '#4B5563' },
    { name: 'Moonrock', bg: 'bg-gray-500', hex: '#6B7280' },
    
    { name: 'Titanium', bg: 'bg-gray-400', hex: '#9CA3AF' },
    { name: 'Mist Gray', bg: 'bg-gray-300', hex: '#D1D5DB' },
    { name: 'White', bg: 'bg-white', hex: '#FFFFFF', border: true },
    { name: 'Cream', bg: 'bg-amber-50', hex: '#FFFBEB' },
    { name: 'Champagne', bg: 'bg-stone-200', hex: '#E7E5E4' },
    
    { name: 'Terra', bg: 'bg-stone-500', hex: '#78716C' },
    { name: 'Saddle', bg: 'bg-amber-200', hex: '#FDE68A' },
    { name: 'Butterscotch', bg: 'bg-yellow-600', hex: '#CA8A04' },
    { name: 'Teak', bg: 'bg-orange-300', hex: '#FDBA74' },
    { name: 'Toffee', bg: 'bg-orange-700', hex: '#C2410C' },
    
    { name: 'Camel', bg: 'bg-amber-800', hex: '#92400E' },
    { name: 'Espresso', bg: 'bg-stone-900', hex: '#1C1917' },
    { name: 'Deep Blue', bg: 'bg-blue-950', hex: '#172554' },
    { name: 'Marina Blue', bg: 'bg-blue-800', hex: '#1E40AF' },
    { name: 'Aegean Blue', bg: 'bg-blue-600', hex: '#2563EB' },
    
    { name: 'Gulfstream', bg: 'bg-cyan-500', hex: '#06B6D4' },
    { name: 'Turquoise', bg: 'bg-teal-600', hex: '#0D9488' },
    { name: 'Ice Blue', bg: 'bg-blue-200', hex: '#BFDBFE' },
    { name: 'Mint Green', bg: 'bg-teal-200', hex: '#99F6E4' },
    { name: 'Sea Foam', bg: 'bg-emerald-400', hex: '#34D399' },
    
    { name: 'Forest Green', bg: 'bg-green-800', hex: '#166534' },
    { name: 'Neon Green', bg: 'bg-green-600', hex: '#16A34A' },
    { name: 'Neon Yellow', bg: 'bg-lime-400', hex: '#A3E635' },
    { name: 'Yellow', bg: 'bg-yellow-400', hex: '#FACC15' },
    { name: 'Orange', bg: 'bg-orange-500', hex: '#F97316' },
    
    { name: 'Tangerine', bg: 'bg-red-500', hex: '#EF4444' },
    { name: 'Pink', bg: 'bg-pink-500', hex: '#EC4899' },
    { name: 'Red', bg: 'bg-red-600', hex: '#DC2626' },
    { name: 'Crimson', bg: 'bg-red-900', hex: '#7F1D1D' },
    { name: 'Purple', bg: 'bg-purple-900', hex: '#581C87' },
    
    { name: 'Ocean Camo', pattern: 'ocean', hex: '#1E90FF' },
    { name: 'Military Camo', pattern: 'military', hex: '#4B5320' },
    { name: 'Desert Camo', pattern: 'desert', hex: '#C2B280' },
    { name: 'Snow Camo', pattern: 'snow', hex: '#D3D3D3' },
    { name: 'Granite', pattern: 'granite', hex: '#A9A9A9' },
  ];

  const getPatternStyle = (pattern) => {
    const patterns = {
      ocean: 'linear-gradient(45deg, #0047AB 25%, #1E90FF 25%, #1E90FF 50%, #0047AB 50%, #0047AB 75%, #1E90FF 75%, #1E90FF)',
      military: 'linear-gradient(135deg, #4B5320 20%, #3C4A18 20%, #3C4A18 40%, #2D3A0F 40%, #2D3A0F 60%, #4B5320 60%, #4B5320 80%, #596B2A 80%)',
      desert: 'linear-gradient(60deg, #C2B280 15%, #D4C4A8 15%, #D4C4A8 35%, #B8A76F 35%, #B8A76F 55%, #C2B280 55%)',
      snow: 'linear-gradient(90deg, #E8E8E8 25%, #C0C0C0 25%, #C0C0C0 50%, #E8E8E8 50%, #E8E8E8 75%, #C0C0C0 75%)',
      granite: 'radial-gradient(circle at 20% 30%, #7A7A7A 0%, #A9A9A9 30%, #8C8C8C 60%, #A9A9A9 100%)'
    };
    return patterns[pattern] || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-light text-center mb-12 text-gray-800">40 Colors</h1>
        
        <div className="grid grid-cols-5 gap-6">
          {colors.map((color, index) => (
            <a
              key={index}
              href={`#${color.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex flex-col items-center group"
            >
              <div 
                className={`w-20 h-20 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl ${
                  color.pattern ? '' : color.bg
                } ${color.border ? 'border-2 border-gray-300' : ''}`}
                style={color.pattern ? {
                  background: getPatternStyle(color.pattern),
                  backgroundSize: '20px 20px'
                } : {}}
              />
              <span className="mt-3 text-sm text-center text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                {color.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
