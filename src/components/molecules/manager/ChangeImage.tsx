import React, { useState, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';

const ChangeImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null | string>(null);


    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };
    <button
      className='absolute w-[20px] h-[20px] bg-[#DB4444] rounded-[50%] top-[5px] right-[5px] border-none cursor-pointer p-0 flex items-center justify-center text-[#fff]'
      onClick={handleRemoveImage}
    >
      <FaTimes />
    </button>;

  return (
    <div className='p-6'>
      <div className='flex flex-col items-center'>
        {selectedImage ? (
          <div className='relative w-full'>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt='Preview'
              className='w-full max-w-[100%] h-[400px] rounded-md object-cover object-center'
            />

          
          </div>
        ) : (
          <div
            className='border-[#DB4444] border-[2px] gap-5 border-dotted flex items-center justify-center cursor-pointer w-[100%] h-[300px] rounded-md'
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
