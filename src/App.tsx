import { Routes, Route } from 'react-router-dom';

import { Footer, Header } from './components';
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
