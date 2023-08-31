import { TbArrowBack } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const NewAddress = () => {
  const history = useNavigate();
  //   useEffect(() => {
  //     console.log(history(-1));
  //   }, [history]);

  return (
    <div className='p-6'>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => history(-1)}
          className='p-2'
        >
          <TbArrowBack />
        </button>
        <h2>ADD NEW ADDRESS</h2>
          </div>
          <hr />
    </div>
  );
};

export default NewAddress;
