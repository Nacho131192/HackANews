import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Header from './components/Header';

import Themes from './components/Themes.jsx';
import HomePage from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CategoriesPage from './pages/CategoriesPage';
import MyNews from './pages/MyNews';
import EntryFull from './pages/EntryFull';


function App() {


  return (


    <>
      <Header />
      <Themes />

      <main>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/entries/:id" element={<EntryFull />} />
          <Route path="/mynews" element={<MyNews />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/:categoryId" element={<CategoriesPage />} />
          <Route path="/mynews" element={<MyNews />} />



        </Routes>


      </main>
      <Footer />
    </>

  )
}

export default App
