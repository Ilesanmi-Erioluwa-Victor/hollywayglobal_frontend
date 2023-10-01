import { useRoutes } from 'react-router-dom';

import {
  Footer,
  Header,
  Cart,
  Checkout,
  ManageAccount,
  Order,
  Reviews,
  AddressBook,
  ChangePassword,
  ChangeImage,
  AccountLayout,
  NewAddressBook,
  EditProfile,
  Product,
} from './components';
import { Home, Register, Login, Error } from './pages';
import Wrapper from './assets/wrappers/HomeWrapper';

const App = () => {
  const customRoutes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },

    {
      element: <Register />,
      path: '/register',
    },

    {
      element: <Login />,
      path: '/login',
    },

    {
      element: <AccountLayout />,
      path: '/user/account/',
      children: [
        {
          element: <ManageAccount />,
          index: true,
        },
        { path: 'orders', element: <Order /> },
        { path: 'reviews', element: <Reviews /> },
        {
          path: 'address',
          element: <AddressBook />,
          children: [
            {
              path: '/user/account/address/create',
              element: <NewAddressBook />,
            },
          ],
        },
        { path: 'password', element: <ChangePassword /> },
        { path: 'updateImage', element: <ChangeImage /> },
        {
          element: <Cart />,
          path: 'cart',
        },

        {
          element: <Checkout />,
          path: 'checkout',
        },
        { path: 'profile', element: <EditProfile /> },
        { path: 'deactivate', element: <h2>Soon to be Implemented </h2> },
      ],
    },
    {
      path: '/*',
      element: <Error />,
    },
    { path: '/product', element: <Product /> },
  ]);

  return (
    <Wrapper className=' bg-slate-100 font-poppins_Display'>
      <div className='overall-layout'>
        <Header />
        {customRoutes}

        <Footer />
      </div>
    </Wrapper>
  );
};

export default App;
