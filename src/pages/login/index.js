import React from 'react'
import {useState} from 'react'
import Input from '../../components/ui/input/Input'
import Router from 'next/router'
import Link from 'next/link'
import styles from './index.module.scss'
import Title from '../../components/ui/title/Title'

function login() {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        Router.push('/');
    }

    return (
        <div className={styles.page__login}>
                <Title title='Login'/>
                <form className={styles.form__login} onSubmit={handleSubmit}>
                    <div>
                        <Input 
                            type="text"
                            name="Username"
                            label="Nom"
                            placeholder="Entrer votre nom..."
                            onChange={e=>setUsername(e.target.value)}
                            required
                        />
                        <Input 
                            type="password"
                            name="Password"
                            label="Mot de passe"
                            onChange={e=>setPassword(e.target.value)}
                            placeholder="Entrer votre mot de passe..."
                            required
                        />
                        
                    </div>
                    <input 
                        className="btn btn-black"
                        type="submit"
                        value="Se connecter"
                    />
                    <Link href='/register'>
                        <a className={styles.button__register}>S'enregistrer?</a>
                    </Link>
                </form>
            </div>          
    )
}

export default login
