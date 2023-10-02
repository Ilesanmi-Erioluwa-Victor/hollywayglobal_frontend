import { useUserStore } from 'src/store/user/userStore';

interface formBtnType {
  formBtn?: Boolean;
  text: string;
}

const SubmitBtn = ({ formBtn, text }: formBtnType) => {
  const { isLoading } = useUserStore();
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
