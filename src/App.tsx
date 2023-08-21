import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home } from './pages';

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
        </Routes>
      </div>
    </div>
  );
};

export default App;
