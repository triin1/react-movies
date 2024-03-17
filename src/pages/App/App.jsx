import './App.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';

function App() {
    const [user, setUser] = useState(null);

    return (
        <main>
            <NavBar user={user}/>
            {user ?
                <Routes>
                    <Route path="/" element={ <MoviesListPage /> }/>
                    <Route path="/movies/:movieName" element={ <MovieDetailPage />}/>
                    <Route path="/actors" element={ <ActorsListPage />}/>
                </Routes>
                :
                <Routes>
                    <Route path="/" element={ <LoginPage setUser={ setUser } />}/>
                </Routes>
            }
        </main>
    )
};

export default App;
