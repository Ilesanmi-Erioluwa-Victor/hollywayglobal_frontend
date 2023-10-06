import { useAppSelector } from 'src/redux/hooks';

interface formBtnType {
  formBtn?: Boolean;
  text: string;
  className?: string;
}

const SubmitBtn = ({ formBtn, text, className }: formBtnType) => {
  const { isLoading } = useAppSelector((state) => state.user);
  return (
    <button
      type='submit'
      className={`${className} btn btn-block ${formBtn && 'form-btn'}`}
      disabled={isLoading}
    >
      {isLoading ? 'loading ...' : text}
    </button>
  );
};

export default SubmitBtn;
