import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import NavBar from './components/NavBar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/Home';
import SignUpPage from './components/SignUp';
import LoginPage from './components/Login';
import CreateRecipe from './components/CreateRecipe';



const App = () => {

    return (
        <Router>
            <div className=''>
                <NavBar />
                <Routes>
                    <Route path='/create_recipe' element={<CreateRecipe />}></Route>

                    <Route path='/login' element={<LoginPage />}></Route>

                    <Route path='/signup' element={<SignUpPage />}></Route>

                    <Route path='/' element={<HomePage />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

// ReactDom.render( <App />, document.getElementById('root') )

const root = createRoot(document.getElementById('root'));

// const domNode = document.getElementById('root');
// const root = createRoot(domNode);

root.render(<App />);