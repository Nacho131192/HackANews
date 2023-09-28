import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Aside from './components/Aside.jsx';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyNews from './pages/MyNews';
import EntryFull from './pages/EntryFull';

function App() {


  return (


    <>
      <Header />
      <Aside />
      <main>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mynews" element={<MyNews />}></Route>
          <Route path="/entries/:news_id" elements={<EntryFull />} />
        </Routes>


      </main>
      <Footer />
    </>

  )
}

export default App
