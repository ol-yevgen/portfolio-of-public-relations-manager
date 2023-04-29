import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import './navbar.scss'

const Navbar = ({ onCloseOpenMenu }) => {

    return (
        <nav className="header__nav">
            <ul className="nav">
                <NavLink
                    to="/"
                    className="nav__link"
                    style={({ isActive }) => ({ background: isActive ? '#333' : null, color: isActive ? '#fff' : null })}
                    onClick={onCloseOpenMenu}
                >
                    <li>Home</li>
                </NavLink>
                <NavLink
                    to="/about"
                    className="nav__link"
                    style={({ isActive }) => ({ background: isActive ? '#333' : null, color: isActive ? '#fff' : null } )}
                    onClick={onCloseOpenMenu}
                >
                    <li>About</li>
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className="nav__link"
                    style={({ isActive }) => ({ background: isActive ? '#333' : null, color: isActive ? '#fff' : null })}
                    onClick={onCloseOpenMenu}
                >
                    <li>Portfolio</li>
                </NavLink>
                <NavLink
                    to="/contacts"
                    className="nav__link"
                    style={({ isActive }) => ({ background: isActive ? '#333' : null, color: isActive ? '#fff' : null })}
                    onClick={onCloseOpenMenu}
                >
                    <li>Contacts</li>
                </NavLink>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    onCloseOpenMenu: PropTypes.func,
}

export default Navbar;