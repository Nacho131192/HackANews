import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Aside from './components/Aside.jsx';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {


  return (


    <>
      <Header />
      <Aside />
      <main>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/" element={<LoginPage />} />

        </Routes>


      </main>
      <Footer />
    </>

  )
}

export default App
