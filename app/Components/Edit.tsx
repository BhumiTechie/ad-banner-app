import React, { useState } from 'react';

interface EditProps {
  currentBanner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const Edit: React.FC<EditProps> = ({ currentBanner, onSave, onClose }) => {
  const [banner, setBanner] = useState(currentBanner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBanner({ ...banner, [name]: value });
  };

  const handleSave = () => {
    onSave(banner);
    onClose();
  };

  return (
    <div className="edit-bottom-sheet">
      <input name="title" value={banner.title} onChange={handleChange} />
      <textarea name="description" value={banner.description} onChange={handleChange} />
      <input name="cta" value={banner.cta} onChange={handleChange} />
      <input name="image" value={banner.image} onChange={handleChange} />
      <input name="background" value={banner.background} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Edit;

