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
} from './components';
import { Home, Register, Login, Products } from './pages';

const App = () => {
  // const navigate = useNavigate()
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
      element: <Products />,
      path: '/products',
    },

    {
      element: <Cart />,
      path: '/cart',
    },

    {
      element: <Checkout />,
      path: '/checkout',
    },

    {
      element: <AccountLayout />,
      path: '/user/account',
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
        { path: 'profile', element: <EditProfile /> },
      ],
    },
    {
      path: '/*',
      element: <h2>Page Not Found</h2>,
    },
  ]);

  //       <Route
  //         element={<AccountLayout />}
  //         path={'/user/account'}
  //       >
  //

  //         <Route
  //           element={<AddressBook />}
  //           path='address'
  //         />

  //         <Route
  //           element={<ChangePassword />}
  //           path='password'
  //         />

  //         <Route
  //           element={<ChangeImage />}
  //           path='updateImage'
  //         />

  //         <Route
  //           element={<NewAddressBook />}
  //           path='address/create'
  //         />
  //       </Route>

  //       <Route
  //         element={<h1> Error page</h1>}
  //         path={'*'}
  //       />
  // </Routes>;

  return (
    <div className='container-custom bg-slate-100'>
      <div className='overall-layout'>
        <Header />
        {customRoutes}

        <Footer />
      </div>
    </div>
  );
};

export default App;
