import { Link, useRouteError } from 'react-router-dom';
import errorPage from '../assets/error-page.svg';


const ErrorPage = (): JSX.Element => {

  return (
    <div className=' mx-10 font-poppins_Display'>
      <div className='flex flex-col items-center py-20'>
        <div className='items-center'>
          <img
            src={errorPage}
            alt='error page'
            className='items-center'
          />
        </div>
        <div className='flex flex-col text-center w-10/12 lg:w-6/12'>
      
        </div>
        <Link to='/'>
          <button className='border-[#DB4444] transition-all hover:bg-[#DB4444] hover:text-white border-2 rounded-md px-6 py-4 mt-5 font-medium font-poppins_Display'>
            Take me home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
