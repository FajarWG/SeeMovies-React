import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent m-4 mx-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand fw-bold">See Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/popular">Popular</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/topmovies">Top Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nowplaying">Now Playing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/upcoming">Upcoming</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;