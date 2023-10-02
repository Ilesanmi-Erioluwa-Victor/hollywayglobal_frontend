import { ReactNode } from 'react';
import Wrapper from 'src/assets/wrappers/HomeWrapper';
import { Header, Footer } from '../components';

export const GeneralLayouts = ({
  children,
}: {
  children: JSX.Element | ReactNode | JSX.Element[];
}) => {
  return (
    <Wrapper className=' bg-slate-100 font-poppins_Display'>
      <div className='overall-layout'>
        <Header />
        {children}

        <Footer />
      </div>
    </Wrapper>
  );
};
