import React from 'react';
import LogoImg from '../../../public/shop.jpeg'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer__main}>
            <div className={styles.footer__logo}>
                <img 
                    src={LogoImg.src} alt="shop" 
                />
            </div>
        </div>
    );
}

export default Footer;
