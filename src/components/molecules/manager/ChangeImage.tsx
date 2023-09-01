import React, { useState, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';

import styled from 'styled-components';

const DottedBorder = styled.div`
  border: 2px dotted #db4444;
  padding: 20px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

const ChangeImage = () => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const onDrop = useCallback(
    (
      acceptedFiles: File[],
      fileRejections: FileRejection[],
      event: DropEvent
    ) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
  });

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    try {
      console.log(selectedImage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <form
      className='p-6'
      onSubmit={handleInputSubmit}
    >
      <div className='relative ob'>
        {!selectedImage ? (
          <DottedBorder {...getRootProps()}>
            <input {...getInputProps()} />
            <p className='text-[1rem] mb-3'>
              Drag &amp; drop an image here, or click to select one
            </p>
            <FiUpload className='text-[2rem]' />
          </DottedBorder>
        ) : (
          <img
            src={selectedImage}
            alt='Selected'
            className='w-max-[100%] h-[500px] w-full object-cover object-center'
          />
        )}
        {selectedImage ? (
          <button
            className='absolute w-[20px] h-[20px] bg-[#DB4444] transition-all rounded-[50%] top-[5px] right-[5px] border-none cursor-pointer p-0 flex items-center justify-center text-[#fff]'
            onClick={handleRemoveImage}
          >
            <FaTimes />
          </button>
        ) : (
          ''
        )}
      </div>
      <button
        type='submit'
        className='flex items-center justify-end bg-[#DB4444] ml-auto mt-4 p-3 rounded-md text-white'
      >
        Save Changes
      </button>
    </form>
  );
};

export default ChangeImage;
