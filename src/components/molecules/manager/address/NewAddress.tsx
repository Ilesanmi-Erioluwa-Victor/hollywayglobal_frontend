import { TbArrowBack } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const NewAddress = () => {
  const history = useNavigate();
  //   useEffect(() => {
  //     console.log(history(-1));
  //   }, [history]);

  return (
    <div className='p-6'>
      <button
        onClick={() => history(-1)}
        className='p-2'
      >
        <TbArrowBack />
      </button>
    </div>
  );
};

export default NewAddress;
