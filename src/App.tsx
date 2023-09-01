import { Routes, Route, useRoutes } from 'react-router-dom';

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
  ]);

  //       <Route
  //         element={<Cart />}
  //         path={'/cart'}
  //       />

  //       <Route
  //         element={<Checkout />}
  //         path={'/checkout'}
  //       />

  //       <Route
  //         element={<AccountLayout />}
  //         path={'/user/account'}
  //       >
  //         <Route
  //           element={<ManageAccount />}
  //           index
  //         />
  //         <Route
  //           element={<Order />}
  //           path='orders'
  //         />

  //         <Route
  //           element={<Reviews />}
  //           path='reviews'
  //         />

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
