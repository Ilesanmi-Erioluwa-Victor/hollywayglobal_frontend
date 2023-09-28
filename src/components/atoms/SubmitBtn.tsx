import { useNavigation } from 'react-router-dom';

interface formBtnType {
  formBtn?: Boolean;
  text: string;
}

const SubmitBtn = ({ formBtn, text }: formBtnType) => {
    const navigation = useNavigation();
    
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className={`btn btn-block ${formBtn && 'form-btn'}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'submitting' : text}
    </button>
  );
};

export default SubmitBtn;
