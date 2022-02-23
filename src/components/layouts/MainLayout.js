import React from 'react';
import HeaderMenu from "../headerMenu/HeaderMenu";
import Footer from "../footer/Footer";
import styles from "./MainLayout.module.scss"

const Mainlayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
                <HeaderMenu/>
            </header>
                <main className={styles.container}>
                    {children}
                </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Mainlayout;
