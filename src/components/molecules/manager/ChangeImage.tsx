import React, { useState } from 'react';

const ChangeImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };
  return (
    <div className='p-6'>
      <div className='flex flex-col items-center'>
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt='Preview'
          />
        ) : (
          <div
            className='border-[2px_dashed_#ccc flex items-center justify-center cursor-pointer]'
            onClick={() => document.getElementById('imageInput')?.click()}
          >
            <p className='m-0'>Click to select an image</p>
          </div>
        )}
        <input
          type='file'
          id='imageInput'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default ChangeImage;
