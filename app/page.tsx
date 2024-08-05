"use client";

import { useState } from 'react';
import BannerImageComp from '../app/Components/BannerImageComp';
import Edit from '../app/Components/Edit';
import bannerData from '../public/banner.json';
import Pages from './Pages/index'
 
export default function Home() {
  const [banners, setBanners] = useState(bannerData);
  const [currentBanner, setCurrentBanner] = useState(null);

  const handleEdit = (banner: any) => {
    setCurrentBanner(banner);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map(b => b.id === updatedBanner.id ? updatedBanner : b));
  };

  return (
    <div>
      {banners.map(banner => (
  <BannerImageComp
    key={banner.id}
    {...banner}
    imageUrl={banner.image}  // Use `image` if that's the correct property
    onEdit={() => handleEdit(banner)}
  />
))}

      {currentBanner && (
        <Edit
          currentBanner={currentBanner}
          onSave={handleSave}
          onClose={() => setCurrentBanner(null)}
        />
      )}
    </div>
  );
}
