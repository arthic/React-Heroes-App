import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="nav">

            <Link
                className="nav-logo"
                to="/"
            >
                <h1>Heroes App</h1>
            </Link>

            <div className="nav-content">

                <NavLink
                    activeClassName="activo"
                    exact
                    to="/marvel"
                >
                    <p>Marvel</p>
                    <img
                        src="./assets/nav/marvel.png"
                        style={{maxWidth: 240}}
                        alt="marvel"
                    />
                </NavLink>

                <NavLink
                    activeClassName="activo"
                    exact
                    to="/dc"
                >
                    <p>DC</p>
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png"
                        src="./assets/nav/dc.png"
                        style={{maxWidth: 140}}
                        alt="dc"
                    />
                </NavLink>
                <NavLink
                    activeClassName="activo"
                    exact
                    to="/search"
                >
                    <p>Búsqueda</p>
                    <div>
                        <i
                            className="fas fa-search"
                        >
                        </i>

                    </div>
                </NavLink>
            </div>
        </nav>
    )
}