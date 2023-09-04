import { Link } from "react-router-dom"
import errorPage from "../assets/error-page.svg"

type ErrorMessage = Record<
  number,
  {
    errorTitle?: string;
    errorMessage: string;
    errorMessageTwo?: string;
  }
>;

const ErrorPage = (props: { statusCode: number }): JSX.Element => {
  const statusCode = props.statusCode;

  const errorMessages: ErrorMessage = {
    404: {
      errorTitle: '',
      errorMessage:
        "It's a 404. Unfortunately we couldn't find what you're looking for.",
    },
    405: {
      errorTitle: 'Uhmm....',
      errorMessage:
        "We couldn't find the page you're looking for. It's either the link is broken or the page has been moved",
    },
  };

  const errorMessageToShow = errorMessages[statusCode];

  return (
    <div className=' mx-10'>
      <div className='flex flex-col items-center py-20'>
        <div className='items-center'>
          <img
            src={errorPage}
            alt='google photo'
            className='items-center'
          />
        </div>
        <div className='flex flex-col text-center w-10/12 lg:w-6/12'>
          <p className='text-2xl my-5'>{errorMessageToShow.errorTitle}</p>
          <p className=''>{errorMessageToShow.errorMessage}</p>
        </div>
        <Link to='/'>
          <button className='border-[#DB4444] border-2 rounded-md px-6 py-4 mt-5 font-medium font-poppins_Display'>
            Take me home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage
