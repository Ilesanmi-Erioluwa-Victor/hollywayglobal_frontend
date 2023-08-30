const ChangeImage = () => {
   const [selectedImage, setSelectedImage] = useState<File | null>(null);

   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const selectedFile = event.target.files?.[0];
     if (selectedFile) {
       setSelectedImage(selectedFile);
     }
   };
  return <div className='p-6'>ChangeImage</div>;
};

export default ChangeImage;
