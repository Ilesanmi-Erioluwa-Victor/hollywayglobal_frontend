import { Link } from 'react-router-dom';

import errorPage from '../assets/images/not-found.svg';

import Wrapper from 'src/assets/wrappers/ErrorPage';

const ErrorPage = (): JSX.Element => {
  return (
    <Wrapper>
      <div>
        <img
          src={errorPage}
          alt='not found'
        />
        <h3>Ohh page not found</h3>
        <p>We cant seem to find the page you are looking for</p>
        <Link
          to={'/'}
          className='rounded-sm bg-sky-500 p-3  text-white transition-all hover:text-sky-500 hover:bg-white'
        >
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
