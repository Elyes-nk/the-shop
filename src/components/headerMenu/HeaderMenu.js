import React, {useState, useContext} from 'react'
import Link from 'next/link'
import styles from "./HeaderMenu.module.scss";
import LogoCart from '../../../public/cart.jpeg'
import Logo from '../../../public/shop.jpeg'
import { useRouter } from "next/router";
import Context from "../../../src/context/Context";

const HeaderMenu = () => {
    const { total } = useContext(Context);
    const router = useRouter();
    const [loged, setLoged] = useState(false)

    const handleLogout = () => {
        router.push("/login");
    }
    return (
        <>
             <div className={styles.header__logo} >
                <img src={Logo.src} alt="Shop" />
            </div>
            <div className={styles.header__menu}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Accueil</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Nos coups de coeur du moment</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>A propos</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.header__toolbar}>
            {loged? (
                <a 
                    className="btn btn-white"
                    onClick={()=>handleLogout()}
                >
                    Logout
                </a>
            ):(
                <Link href="/login">
                    <a className="btn btn-white">
                        S'identifier
                    </a>
                </Link>
            )}
            <Link href='/cart'>
                <a>
                    <img 
                        src={LogoCart.src} alt="Cart" 
                    />
                    {total}
                </a>
            </Link>
        </div>     
        </>
    );
}

export default HeaderMenu;
