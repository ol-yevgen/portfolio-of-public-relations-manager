import { useDispatch } from 'react-redux';
import { changeSiteLanguage } from '../../../redux/features/slices/languageSlice';

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const changeLang = (e) => {
        dispatch(changeSiteLanguage(e.target.value));
        localStorage.setItem('language', e.target.value)
    }

    return (
        <select
            className="lang-select"
            name="lang"
            id="lang-select"
            onChange={changeLang}
        >
            <option
                className="lang-select__ua"
                value="ua">UA</option>
            <option className="lang-select__en" value="en">EN</option>
        </select>
    )
}

export default LanguageSelector;