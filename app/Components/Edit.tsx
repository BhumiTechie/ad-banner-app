
import React, { useState } from 'react';

interface EditProps {
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  onSave: (title: string, description: string, cta: string, imageUrl: string) => void;
  onClose: () => void;
}

const Edit: React.FC<EditProps> = ({ title, description, cta, imageUrl, onSave, onClose }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCta, setNewCta] = useState(cta);
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);

  const handleSave = () => {
    onSave(newTitle, newDescription, newCta, newImageUrl);
    onClose();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg rounded-t-lg">
      <h3 className="text-lg font-bold mb-4">Edit Banner</h3>
      <div className="space-y-4">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border rounded-lg"
        />
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          value={newCta}
          onChange={(e) => setNewCta(e.target.value)}
          placeholder="CTA Text"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          placeholder="Image URL"
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mt-4 flex justify-end space-x-4">
        <button onClick={onClose} className="py-2 px-4 bg-gray-300 rounded-lg">Cancel</button>
        <button onClick={handleSave} className="py-2 px-4 bg-blue-500 text-white rounded-lg">Save</button>
      </div>
    </div>
  );
};

export default Edit;
