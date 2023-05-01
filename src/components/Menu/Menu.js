import LanguageSelector from '../ui/LanguageSelector/LanguageSelector';
import Navbar from '../../layouts/Navbar/Navbar';

import './menu.scss'

const Menu = () => {
    return (
        <>
            <div className="main__menu">
                <Navbar />
                <div className="header__selector">
                    <LanguageSelector />
                </div>
            </div>
        </>
    )
}

export default Menu;