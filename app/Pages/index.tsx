import React, { useState } from 'react';
import BannerImageComp from '../Components/BannerImageComp';
import Edit from '../Components/Edit';

const Home: React.FC = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      title: "Boost Your Leads",
      description: "Harness AI for Effective Campaigns",
      cta: "Learn More",
      imageUrl: "https://example.com/image.jpg",
    },
    // Add more banners as needed
  ]);

  const [editingBanner, setEditingBanner] = useState<any | null>(null);

  const handleEdit = (banner: any) => {
    setEditingBanner(banner);
  };

  const handleSave = (id: number, title: string, description: string, cta: string, imageUrl: string) => {
    setBanners(banners.map(banner =>
      banner.id === id ? { ...banner, title, description, cta, imageUrl } : banner
    ));
    setEditingBanner(null);
  };

  return (
    <div className="p-4">
      {banners.map(banner => (
        <div key={banner.id} className="mb-4">
          <BannerImageComp
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            imageUrl={banner.imageUrl}
            onEdit={() => handleEdit(banner)}
          />
        </div>
      ))}

      {editingBanner && (
        <Edit
          title={editingBanner.title}
          description={editingBanner.description}
          cta={editingBanner.cta}
          imageUrl={editingBanner.imageUrl}
          onSave={(title, description, cta, imageUrl) =>
            handleSave(editingBanner.id, title, description, cta, imageUrl)
          }
          onClose={() => setEditingBanner(null)}
        />
      )}
    </div>
  );
};

export default Home;