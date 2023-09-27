import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Header from './components/Header';
import Themes from './components/Themes.jsx';
import Celebrities from './pages/Celebrities';
import Festivals from './pages/Festivals';
import Oscars2024 from './pages/Oscars2024';
import Premieres from './pages/Premieres';
import Ranking from './pages/Ranking';
import Reviews from './pages/Reviews';



import HomePage from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

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
          <Route path= "/celebrities" element= {<Celebrities/>}/>
          <Route path= "/festivals" element= {<Festivals/>}/>
          <Route path= "/oscars2024" element= {<Oscars2024/>}/>
          <Route path= "/premieres" element= {<Premieres/>}/>
          <Route path= "/ranking" element= {<Ranking/>}/>
          <Route path= "/reviews" element= {<Reviews/>}/>
        </Routes>


      </main>
      <Footer />
    </>

  )
}

export default App
