import image1 from '../../assets/images/dark_800.png';
import image2 from '../../assets/images/signup.png';
import image3 from '../../assets/react.svg';

export const images = [image1, image2, image3];

const imageByIndex = (index: number) => images[index % images.length];

export default imageByIndex;
