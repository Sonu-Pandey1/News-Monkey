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
                            <form className="d-flex me-3 " role="search">
                                <input className="form-control me-2 navBgcolor " type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-info" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}