import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useJsApiLoader } from "@react-google-maps/api";

import { useSendingAlertMessage, useSentAlertMessage, useNotSentAlertMessage, useErrorAlertMessage } from '../../hooks/useFormAlertMessage';
import { useStartSpallingAnimation } from '../../hooks/useSpallingAnimate';
import { useChangeLanguage } from '../../hooks/useChangeLanguage';

import { contactsTextDataUa, contactsTextDataEn } from '../../data/sectionData/contactsSectionTextData';
import ContactsForm from '../../components/Form/Form';
import {Map} from '../../components/Map/Map';
import './contacts.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const Contacts = () => {

    const sendingMessageStatus = useSelector((state) => state.form.messageSending);
    const sentMessageStatus = useSelector((state) => state.form.messageSent);
    const submitFormStatus = useSelector((state) => state.form.submitClickStatus);
    const errorFormStatus = useSelector((state) => state.form.errorStatus);

    const alertSendingForm = useSendingAlertMessage(sendingMessageStatus);
    const alertRequiredForm = useSentAlertMessage(sentMessageStatus, errorFormStatus);
    const alertNotRequiredForm = useNotSentAlertMessage(submitFormStatus, sendingMessageStatus, errorFormStatus, sentMessageStatus);
    const alertErrorForm = useErrorAlertMessage(errorFormStatus);

    const language = useChangeLanguage(contactsTextDataUa, contactsTextDataEn)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    const { pageLoaded, iconsRef, scopeSkillIcons } =
        useStartSpallingAnimation(
            0.1,
            ' div, input, textarea, button',
            { opacity: 1, y: '0%', visibility: 'visible' },
            { opacity: 0, y: '100%', visibility: 'hidden' },
            0.8
        )

    return (
        <section className="contacts">

            <div className="contacts__wrapper" >
                <h2 className="title">{language.title}</h2>
                <p className="contacts__text">
                    {language.text}
                </p>
                <AnimatePresence>

                    <div className={pageLoaded ? 'show' : 'hide'}
                        ref={iconsRef}
                    >
                        <div className="contacts__container" ref={scopeSkillIcons}>
                            <div className="contacts__left">

                                <ContactsForm langButton={language.contactButton}/>

                            </div>

                            <div className="contacts__right">
                                <div className="contacts__right-top">
                                    <div className="contacts__block">
                                        <div className="contacts__icon">
                                            <svg width="23px" height="23px" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.72386 20.8881 5.47386 20.7071 5.29289M3.29289 5.29289L10.5858 12.5857C11.3668 13.3668 12.6332 13.3668 13.4142 12.5857L20.7071 5.29289"
                                                    stroke="#333" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span>natalishpanyuk93@gmail.com</span>
                                    </div>
                                    <div className="contacts__block">
                                        <div className="contacts__icon">
                                            <svg width="23px" height="23px" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.9995 19.1864V16.4767C21.0105 16.0337 20.858 15.6021 20.5709 15.264C19.7615 14.3106 16.9855 13.7008 15.8851 13.935C15.0274 14.1176 14.4272 14.9788 13.8405 15.5644C11.5747 14.2785 9.69864 12.4062 8.41026 10.1448C8.99696 9.55929 9.85994 8.96036 10.0429 8.10428C10.2772 7.00777 9.66819 4.24949 8.72138 3.43684C8.38835 3.151 7.96253 2.99577 7.52331 3.00009H4.80817C3.77364 3.00106 2.91294 3.92895 3.00713 4.96919C3.00006 13.935 10.0001 21 19.0265 20.9929C20.0723 21.0873 21.0037 20.2223 20.9995 19.1864Z"
                                                    stroke="#333" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <a href="tel:+380985332379">+380 (98) 533 23 79</a>
                                    </div>
                                </div>
                                <div className="contacts__map">
                                    {isLoaded ? <Map/> : <div>Loading...</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatePresence>
                <AnimatePresence>
                    <div className="alerts" >
                        {alertSendingForm}
                        {alertRequiredForm}
                        {alertNotRequiredForm}
                        {alertErrorForm}
                    </div>
                </AnimatePresence>

            </div>
        </section >
    )
}

export default Contacts;

