import { Link } from "react-router-dom";
import { useState} from 'react';

const Navbar = () => {

    const [click, setClick] = useState(0);

    const setTotalClick = () => {
        setClick(click + 1);
        localStorage.setItem('Total Click', click + 1);
    }

    const resetClick = () => {
        setClick(0);
        localStorage.setItem('Total Click', 0);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-transparent m-4 mx-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand fw-bold text-dark">See Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fw-semibold" id="navbarNav">
                    <ul className="navbar-nav  ms-auto align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => setTotalClick()}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/watchlist" onClick={() => setTotalClick()}>Watchlist</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={() => setTotalClick()}>About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search" onClick={() => setTotalClick()}>Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register" onClick={() => setTotalClick()}>
                                <button className="btn btn-secondary fw-semibold">Register</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" onClick={() => setTotalClick()}>
                                <button className="btn btn-dark fw-semibold">Login</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={() => resetClick()}>Total Click {click}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;