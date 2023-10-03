import { useAppSelector } from 'src/redux/hooks';

interface formBtnType {
  formBtn?: Boolean;
  text: string;
}

const SubmitBtn = ({ formBtn, text }: formBtnType) => {
  const { isLoading } = useAppSelector((state) => state.user);
  return (
    <button
      type='submit'
      className={`btn btn-block ${formBtn && 'form-btn'}`}
      disabled={isLoading}
    >
      {isLoading ? 'loading ...' : text}
    </button>
  );
};

export default SubmitBtn;
