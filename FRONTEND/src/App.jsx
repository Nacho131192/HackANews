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
import CreateEntry from './pages/CreateEntry';


function App() {


  return (


    <>
      <Header />
      <Themes/>
      
      <main>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mynews" element={<MyNews />}/>
          <Route path="/entries/:news_id" elements={<EntryFull />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path= "/:categoryId" element= {<CategoriesPage/>}/>
          <Route path="/mynews" element={<MyNews/>}/>
          <Route path="/createentry" element = {<CreateEntry/>}/>


        </Routes>


      </main>
      <Footer />
    </>

  )
}

export default App
