import { Routes, Route } from 'react-router-dom';

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
  
} from './components';
import { Home, Register, Login, Products } from './pages';

const App = () => {
  return (
    <div className='container-custom'>
      <div className='overall-layout'>
        <Header />

        <Routes>
          <Route
            element={<Home />}
            path={'/'}
          />

          <Route
            element={<Register />}
            path={'/register'}
          />

          <Route
            element={<Login />}
            path={'/login'}
          />

          <Route
            element={<Products />}
            path={'/products'}
          />

          <Route
            element={<Cart />}
            path={'/cart'}
          />

          <Route
            element={<Checkout />}
            path={'/checkout'}
          />

          <Route
            element={<ManageAccount />}
            path={'/'}
          >
            <Route
              element={<Order />}
              path='orders'
            />

            <Route
              element={<Reviews />}
              path='reviews'
            />

            <Route
              element={<AddressBook />}
              path='address'
            />

            <Route
              element={<ChangePassword />}
              path='password'
            />

            <Route
              element={<ChangeImage />}
              path='updateImage'
            />

          </Route>

          <Route
            element={<h1> Error page</h1>}
            path={'*'}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
