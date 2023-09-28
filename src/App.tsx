import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
import { HomeLayout, Register, Login, Error } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
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
    ],

    errorElement: <Error />,
  },
]);

const App = () => {
  return (
 
    <RouterProvider router={router} />
  );
};

export default App;
