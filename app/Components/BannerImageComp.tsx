// components/BannerImageComp.tsx
import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, imageUrl, onEdit }) => {
  return (
    <div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="absolute top-2 right-2 cursor-pointer" onClick={onEdit}>
        <img src="/edit-icon.png" alt="edit" className="w-5 h-5" />
      </div>
      <div className="flex items-center space-x-4">
        <img src={imageUrl} alt="banner image" className="w-24 h-24 object-cover rounded-full" />
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg">
        {cta}
      </button>
    </div>
  );
};

export default BannerImageComp;
