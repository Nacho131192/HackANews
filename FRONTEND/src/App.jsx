import './App.css';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer.jsx';
import Header from './components/Header';

import Themes from './components/Themes.jsx';
import HomePage from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CategoriesPage from './pages/CategoriesPage';
import MyNewsPage from './pages/MyNewsPage';
import EntryFull from './pages/EntryFull';
import CreateEntry from './pages/CreateEntry';
import UpdateEntry from './pages/UpdateEntry';

import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';

function App() {
    const { user } = useContext(LoginContext);

    return (
        <>
            <Header />

            <Themes />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/entries/:id" element={<EntryFull />} />
                    <Route path="/mynews" element={<MyNewsPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/:categoryId" element={<CategoriesPage />} />
                    <Route path="/createentry" element={<CreateEntry />} />
                    <Route path="/entries/update/:entryId" element={<UpdateEntry />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );

}

export default App;
