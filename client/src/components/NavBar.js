import React from 'react';
import { Link } from 'react-router-dom';
import { logout, useAuth } from '../auth';


const LoggedInLinks = () => {
    return(
        <>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/create_recipe'}>Create Recipe</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" active href='#' onClick={()=>{logout()}}>Log Out</a>
            </li>
        </>
    )
}

const LoggedOutLinks = () => {
    return(
        <>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link" to={'/signup'}>Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/login'}>Login</Link>
            </li>
        </>
    )
}


const NavBar = () => {

    const [logged] = useAuth();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <Link className="navbar-brand" to={'/'}>Recipes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {logged ? <LoggedInLinks/> : <LoggedOutLinks/>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;