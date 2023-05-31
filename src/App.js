import './App.scss';
import { Routes, Route } from "react-router-dom"

import Header from './components/Header';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Destinations from './pages/Destinations';
import Discover from './pages/Discover';
import AccountSettings from './pages/AccountSettings';
import Admin from './pages/Admin';
import Acivity from './pages/Activity';
import Favorites from './pages/Favorites';

function App() {
    function animationIntro() {
        const intro = document.getElementById('intro');
        const logoSpan = document.querySelectorAll('.logo');

        const top_container = document.getElementById('top_container');
        const bottom_container = document.getElementById('bottom_container');
        const container = document.getElementById('container');

        setTimeout(() => {
            if (top_container != null) {
                top_container.classList.add('slide');
            }
            bottom_container.classList.add('slide');
            container.classList.add('blur');

            setTimeout(() => {
                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.add('active');
                    }, (idx + 1) * 400);
                });
    
                setTimeout(() => {
                    logoSpan.forEach((span, idx) => {
                        setTimeout(() => {
                            span.classList.remove('active');
                            span.classList.add('fade');
                        }, (idx + 1) * 50);
                    });
                }, 2000);
    
                setTimeout(() => {
                    if (top_container != null) {
                        top_container.classList.remove('slide');
                    }
                    top_container.classList.add('fade');
                    bottom_container.classList.remove('slide');
                    bottom_container.classList.add('fade');
                    
                    // remove blur to the container
                    container.classList.remove('blur');

                    setTimeout(() => {
                        intro.remove();
                    }, 1000);
                }, 2800);
            }, 500);
        });
    }

    return (
        <div className="App flex justify-center" onLoad={animationIntro}>
            <div className='intro' id='intro'>
                <div className='top_container' id='top_container'>
                </div>
                <div className='bottom_container' id='bottom_container'>
                </div>
                <div className='intro2' id='intro2'>
                    <h1 className='logo-header' id='logo-header'>
                        <span className='logo' id='logo'>
                            V
                        </span>
                        <span className='logo' id='logo'>
                            V
                        </span>
                        <span className='logo' id='logo'>
                            A
                        </span>
                        <span className='logo' id='logo'>
                            .
                        </span>
                    </h1>
                </div>
            </div>

            <div className='w-full p-10' id='container'>
                <Header />
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/login" element={ <LogIn/> } />
                    <Route path="/signup" element={ <SignUp/> } />
                    <Route path="/destinations" element={ <Destinations/> } />
                    <Route path="/discover" element={ <Discover/> } />
                    <Route path="/account-settings" element={ <AccountSettings/> } />
                    <Route path="/admin" element={ <Admin/> } />
                    <Route path="/activity" element={ <Acivity/> } />
                    <Route path="/favorites" element={ <Favorites/> } />
                </Routes>
            </div>
        </div>
    );
}

export default App;