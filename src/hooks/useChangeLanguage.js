import { useSelector } from 'react-redux';

export const useChangeLanguage = (ua, en) => {
    const siteLanguage = useSelector((state) => state.language.language);

    const checkLanguage = (siteLanguage) => {
        switch (siteLanguage) {
            case 'ua':
                return ua
            case 'en':
                return en
            default:
                return ua
        }
    }
    
    return checkLanguage(siteLanguage)
}