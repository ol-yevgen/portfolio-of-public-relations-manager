import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useChangeLanguage } from '../../hooks/useChangeLanguage';

import { navLinkDataUa, navLinkDataEn } from '../../data/navLinkData';
import './navbar.scss'

const Navbar = ({ onCloseOpenMenu }) => {

    const language = useChangeLanguage(navLinkDataUa, navLinkDataEn)

    const navBar = language.map((link) => {
        const navLink = <NavLink
            to={link.link}
            key={link.label}
            className="nav__link"
            style={({ isActive }) => ({ background: isActive ? '#333' : null, color: isActive ? '#fff' : null })}
            onClick={onCloseOpenMenu}
        >
            <li>{link.label}</li>
        </NavLink>

        return navLink
    })

    return (
        <nav className="header__nav">
            <ul className="nav">
                {navBar}
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    onCloseOpenMenu: PropTypes.func,
}

export default Navbar;