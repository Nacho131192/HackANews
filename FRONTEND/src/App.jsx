import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Header from './components/Header';
import Themes from './components/Themes.jsx';

import HomePage from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {


  return (


    <>
      <Header />
      <Themes/>
      
      <main>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path= "/:id" element= {<CategoriesPage/>}/>
         
        </Routes>


      </main>
      <Footer />
    </>

  )
}

export default App
