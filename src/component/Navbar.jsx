import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navBar sticky-top navBgcolor navbar-expand-lg bg-body-tertiary">
                
                    <div className="container-fluid navinnerdiv">
                        <NavLink className="navbar-brand NavTitle ms-4" to={"/"}>News Monkey </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link navLink" aria-current="page" to={"/"}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navLink" aria-current="page" to={"/business"}>Business</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navLink" aria-current="page" to={"/entertainment"}>Entertainment</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navLink" aria-current="page" to={"/general"}>General</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navLink" aria-current="page" to={"/science"}>Science</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navLink" aria-current="page" to={"/health"}>Health</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navLink" aria-current="page" to={"/sports"}>Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navLink" aria-current="page" to={"/technology"}>Technology</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navLink" to={"/contact"}>Contact Us</NavLink>
                                </li>
                            </ul>
                            <div className="input-wrapper">
                            <button className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M22 22L20 20"></path>
                                </svg>
                            </button>
                            <input placeholder="search.."  className={`input`} name="text" type="text" />
                        </div>
                            {/* <form className="d-flex me-3 " role="search">
                                <input className="form-control me-2 navBgcolor " type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-info" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}