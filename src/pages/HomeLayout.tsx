import { Outlet } from 'react-router-dom';

import Wrapper from 'src/assets/wrappers/HomeWrapper';

import { Header, Footer } from '../components';

const HomeLayout = () => {
  return (
    <Wrapper className=' bg-slate-100 font-poppins_Display'>
      <div className='overall-layout'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default HomeLayout;
