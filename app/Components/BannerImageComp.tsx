import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
      <img src={image} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onEdit}>{cta}</button>
      </div>
    </div>
  );
};

export default BannerImageComp;
