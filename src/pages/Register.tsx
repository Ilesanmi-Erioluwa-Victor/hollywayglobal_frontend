import { Field } from 'src/components/atoms';

const Register = () => {
  return (
    <div className=' paddTop flex'>
      <div className='h-[10rem] w-[55%] bg-red-600'>fgfbnbn</div>

      <div className='padd w-[45%] py-[1rem]'>
        <form className='flex flex-col gap-[1rem]'>
          <h3 className='font-[500] text-[2rem]'>Create an account</h3>
          <p className='font-[400] text-[0.8rem]'>Enter your details below</p>
          <div className='flex flex-col gap-[1rem]'>
            <Field
              name='firstName'
              label='firstName'
              value='firstName'
              onChange={''}
              id='firstName'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
