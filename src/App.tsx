import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  EditAddress,
} from './components';
import { Home, Register, Login, Error } from './pages';
import Wrapper from './assets/wrappers/HomeWrapper';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },

  {
    element: <Register />,
    path: '/register',
    errorElement: <Error />,
  },

  {
    element: <Login />,
    path: '/login',
    errorElement: <Error />,
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

          {
            path: '/user/account/address/:addressId',
            element: <EditAddress />,
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
    errorElement: <Error />,
  },

  { path: '/product', element: <Product /> },
]);
