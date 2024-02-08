import { useDispatch } from 'react-redux';
import { changeSiteLanguage } from '../../../redux/features/slices/languageSlice';
import { openCloseMenu } from '../../../redux/features/slices/burgerSlice';

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const changeLang = (e) => {
        dispatch(changeSiteLanguage(e.target.value));
        dispatch(openCloseMenu())
        // localStorage.setItem('language', e.target.value)
    }

    return (
        <select
            className="lang-select"
            name="lang"
            id="lang-select"
            onChange={changeLang}
        >
            <option
                className="lang-select__en"
                value="en">
                EN
            </option>
            <option
                className="lang-select__ua"
                value="ua">
                UA
            </option>
            
        </select>
    )
}

export default LanguageSelector;