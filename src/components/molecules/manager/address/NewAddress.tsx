import { TbArrowBack } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const NewAddress = () => {
  const history = useNavigate();
  //   useEffect(() => {
  //     console.log(history(-1));
  //   }, [history]);

  return (
    <div className='p-6'>
      <div>
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
