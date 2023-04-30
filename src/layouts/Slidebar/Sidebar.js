import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';
import LanguageSelector from '../../components/ui/LanguageSelector/LanguageSelector';
import SocialList from '../../components/SocialList/SocialList';
import './slidebar.scss'

const Slidebar = ({ onCloseOpenMenu, burgerMenuStatus }) => {
    const openCloseMenuClass = burgerMenuStatus ? 'mobile__menu menu__open' : 'mobile__menu menu__close';

    return (
        <div className={openCloseMenuClass}>
            <div className="header__selector mobile__selector">
                <LanguageSelector/>
            </div>
            <div className="mobile__photo">
                <div className="mobile__photo-img"></div>
            </div>
            <Navbar 
                onCloseOpenMenu={onCloseOpenMenu}
            />
            <div className="mobile__social">
                <SocialList/>
            </div>
        </div>
    )
}

Slidebar.propTypes = {
    onCloseOpenMenu: PropTypes.func,
    burgerMenuStatus: PropTypes.bool
}

export default Slidebar;