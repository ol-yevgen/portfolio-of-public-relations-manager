import { v4 as uuidv4 } from 'uuid';

import { socialListData } from '../../data/socialListData'
import './socialList.scss';

const SocialList = () => {
    const socialIcon = socialListData.map(icon => {
        return <a
            key={uuidv4()}
            href={icon.link}
            className='social__link'
            target='_blank'
            rel='noreferrer'
            aria-label="Visit my social account"
        >
                <li className="social__icon">
                    {icon.icon}
                </li>
            </a>
    })
    return (
        <ul className="social__list">
            {socialIcon}
        </ul>
    )
}

export default SocialList;