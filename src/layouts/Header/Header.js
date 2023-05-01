import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openCloseMenu } from '../../redux/features/slices/burgerSlice';
import { useResize } from '../../hooks/useResize';

import Menu from '../../components/Menu/Menu';
import Burger from '../../components/Burger/Burger';
import Slidebar from '../Slidebar/Sidebar';
import './header.scss';

const Header = () => {
    const burgerMenu = useSelector((state) => state.burgerMenu.burgerMenu)
    const dispatch = useDispatch()
    const windowSize = useResize();

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/"
                    className="logo"
                    onClick={() => burgerMenu ? dispatch(openCloseMenu()) : null}
                >
                    NATALIIA
                </Link>
            </div>
            {windowSize.isScreenLg ?
                <Menu /> : <>
                    <Slidebar
                        onCloseOpenMenu={() => dispatch(openCloseMenu())}
                        burgerMenuStatus={burgerMenu}
                    />
                    <Burger />
                </> 
            }
        </header>
    )
}

export default Header;