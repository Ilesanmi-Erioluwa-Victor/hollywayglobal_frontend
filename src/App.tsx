import { Routes, Route } from 'react-router-dom';

import { Footer, Header, Cart, Checkout } from './components';
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
            element={<Checkout />}
            path={'/manageAccount'}
          />

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
