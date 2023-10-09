import React, { useState, useCallback } from 'react';
import { MdClose } from 'react-icons/md';
import { FiUpload } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';
import { useSnackbar } from 'notistack';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { changeProfileImageAction } from 'src/redux/slices/user';

import styled from 'styled-components';

const DottedBorder = styled.div`
  border: 2px dotted green;
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
  const [selectedImage, setSelectedImage] = useState<File | any>(null);
  const { enqueueSnackbar } = useSnackbar();

  const { isLoading } = useAppSelector((state) => state.user);

  const imageUrl = useAppSelector((state) => state.user.image);

  const dispatch = useAppDispatch();

  // const onDrop = useCallback((acceptedFiles: File[]) => {
  //   const file = acceptedFiles[0];
  //   console.log(acceptedFiles);
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     setSelectedImage(reader.result as string);
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }, []);

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   accept: {
  //     "image/*": [".png", ".jpg", ".jpeg"],
  //   },
  // });

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(selectedImage);
    event.preventDefault();
    if (!selectedImage) {
      return enqueueSnackbar('Please, select an image to upload', {
        variant: 'error',
      });
    }
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const resultAction = await dispatch(
        changeProfileImageAction(selectedImage)
      );
      if (changeProfileImageAction.fulfilled.match(resultAction)) {
        if (resultAction?.payload.status === 'success') {
          return enqueueSnackbar(resultAction?.payload?.message, {
            variant: 'success',
          });
        }
      } else if (changeProfileImageAction.rejected.match(resultAction)) {
        const error: any = resultAction.payload;
        return enqueueSnackbar(error.message, {
          variant: 'error',
        });
      }
    } catch (error: any) {
      if (error.message === 'Network Error') {
        return enqueueSnackbar(error.message, {
          variant: 'error',
        });
      } else {
        return enqueueSnackbar(error.response.data.message, {
          variant: 'error',
        });
      }
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
      {/* <div className="relative">
        {!selectedImage ? (
          <DottedBorder {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="text-[1rem] mb-3">
              Drag &amp; drop an image here, or click to select one
            </p>
            <FiUpload className="text-[2rem]" />
          </DottedBorder>
        ) : (
          <div className="w-full">
            <img src={selectedImage} alt="Selected" className="img h-[25rem]" />
          </div>
        )}
        {selectedImage && (
          <button
            onClick={handleRemoveImage}
            className="bg-green-500 absolute top-[-20px] right-[-15px]  p-3 text-white rounded-[50%] hover:bg-green-600 transition-all"
          >
            <MdClose />
          </button>
        )}
      </div>
      {selectedImage && (
        <button
          type="submit"
          className="flex items-center justify-end bg-green-500 hover:bg-green-600 transition-all ml-auto mt-4 p-3 rounded-md text-white"
        >
          Save Changes
        </button>
      )} */}

      <input
        type='file'
        accept='image/*'
        onChange={(e: any) => setSelectedImage(e?.target?.files[0])}
      />
      <button type='submit'>Upload Image</button>
      {imageUrl && (
        <img
          src={imageUrl}
          alt='Uploaded'
          className='img'
        />
      )}
    </form>
  );
};

export default ChangeImage;
