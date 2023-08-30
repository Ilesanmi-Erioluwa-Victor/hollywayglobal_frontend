import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

const ChangeImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className='p-6'>
      <div className='flex flex-col items-center'>
        {selectedImage ? (
          <div className='relative w-full  bg-red-900'>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt='Preview'
              className='w-full max-w-[100%] h-[400px] rounded-md object-cover object-center'
            />

            <button
              className='absolute w-[20px] h-[20px] bg-[#00000080] rounded-[50%] top-[5px] right-[5px] border-none cursor-pointer p-0 flex items-center justify-center text-[#fff]'
              onClick={handleRemoveImage}
            >
              <FaTimes />
            </button>
          </div>
        ) : (
          <div
            className='border-[#ccc] border-[2px] gap-5 border-dotted flex items-center justify-center cursor-pointer w-[100%] h-[300px] rounded-md'
            onClick={() => document.getElementById('imageInput')?.click()}
          >
            <span className='text-[2rem] '>{<FiUpload />}</span>
            <p>Select image to upload</p>
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

      <button
        type='submit'
        className='flex items-center justify-end bg-[#DB4444] ml-auto mt-4 p-3 rounded-md text-white'
      >
        Save Changes
      </button>
    </div>
  );
};

export default ChangeImage;
