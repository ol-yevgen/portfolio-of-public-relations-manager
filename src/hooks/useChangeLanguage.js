import { useCallback } from 'react';

export const useChangeLanguage = (ua, en) => {

    const chackedLang = useCallback(() => {
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

        return checkLanguage()
    }, [ua, en])

    return chackedLang()
}