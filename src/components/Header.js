import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="logo">
                        <Link to="/">Watchlist</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Watchlist</Link>
                        </li>
                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <li>
                            <Link to="/addmovie">Add Movie</Link>
                        </li>
                        <li>
                            <Link to="/addshow">Add Show</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
