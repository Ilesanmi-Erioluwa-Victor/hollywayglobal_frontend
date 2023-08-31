import { TbArrowBack } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { FieldSet } from '../../../../components/atoms';

const NewAddress = () => {
  const history = useNavigate();
  //   useEffect(() => {
  //     console.log(history(-1));
  //   }, [history]);

  return (
    <div className='p-6'>
      <div className='flex items-center gap-4 mb-3'>
        <button
          onClick={() => history(-1)}
          className=' text-white p-2 rounded-sm bg-[#DB4444] text-[1rem]'
          title='Go Back'
        >
          <TbArrowBack />
        </button>
        <h2 className='text-[1.3rem]'>ADD NEW ADDRESS</h2>
      </div>
      <hr />

      <div className='mt-4'>
        <fieldset className='flex justify-between items-center gap-4'>
          <FieldSet
            label='Delivery Address'
            variant='standard'
            id='deliveryAddress'
            type='text'
            value=''
            onChange={() => console.log()}
            name='deliveryAddress'
          />
          <FieldSet variant={'standard'} />
        </fieldset>
      </div>
      <hr />
    </div>
  );
};

export default NewAddress;
