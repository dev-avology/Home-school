import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './containers';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { Loader } from './components/loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  window.addEventListener('load', AOS.refreshHard);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    );
  }
}

export default App;
