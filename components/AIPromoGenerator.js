import React, { useState } from 'react';
import { Upload, Camera, Palette, Calendar, Sliders, Play } from 'lucide-react';

const Icon = ({ icon: IconComponent, color }) => (
  <IconComponent className={`w-6 h-6 text-${color}-500`} />
);

const Input = ({ placeholder, icon, color }) => (
  <div className="flex items-center space-x-4 bg-white p-2 rounded-lg shadow">
    <Icon icon={icon} color={color} />
    <input
      type="text"
      placeholder={placeholder}
      className="flex-grow outline-none"
    />
  </div>
);

const Select = ({ options, icon, color }) => (
  <div className="flex items-center space-x-4 bg-white p-2 rounded-lg shadow">
    <Icon icon={icon} color={color} />
    <select className="flex-grow outline-none bg-transparent">
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const Slider = ({ label, value, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span>{value}px</span>
    </div>
    <input type="range" min="300" max="2000" value={value} className={`w-full accent-${color}-500`} />
  </div>
);

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition flex items-center justify-center space-x-2"
  >
    <Play className="w-4 h-4" />
    <span>{children}</span>
  </button>
);

export default function AIPromoGenerator() {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(628);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-green-100 rounded-xl shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">AI Promo Content Generator</h1>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <Icon icon={Upload} color="blue" />
            <span className="font-semibold">Upload Product Images</span>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Select Files
          </button>
        </div>
        
        <Input placeholder="Enter promotional offer details" icon={Camera} color="green" />
        <Input placeholder="Enter color palette (e.g., #FF5733,#33FF57)" icon={Palette} color="purple" />
        <Select options={["Select a theme", "Diwali", "Independence Day", "Christmas"]} icon={Calendar} color="red" />
        <Select options={["Banner", "Video"]} icon={Sliders} color="yellow" />
        
        <div className="space-y-2">
          <span className="font-semibold">Size:</span>
          <div className="space-y-3">
            <Slider label="Width" value={width} color="blue" />
            <Slider label="Height" value={height} color="blue" />
          </div>
        </div>
      </div>
      
      <Button onClick={() => console.log('Generate content')}>
        Generate Content
      </Button>
    </div>
  );
}
