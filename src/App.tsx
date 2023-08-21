import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components';

const App = () => {
  return (
    <div className='container-custom'>
      <div className='overall-layout'>
        <Header />
      </div>
    </div>
  );
};

export default App;
