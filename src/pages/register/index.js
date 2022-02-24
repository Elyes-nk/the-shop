import React from 'react'
import Input from '../../components/ui/input/Input'
import {useState} from 'react'
import styles from "./index.module.scss";
import Router from 'next/router'
import Title from '../../components/ui/title/Title'

function register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => { 
        e.preventDefault();
        Router.push('/');
    };

    return (
        <div className={styles.page__register}>
                <Title title="Inscription"/>
                <form className={styles.form__register} onSubmit={handleSubmit}>
                    <div>
                        <Input 
                            type="text"
                            label="Nom"
                            name="Username"
                            placeholder="Entrer votre nom..."
                            onChange={e=>setUsername(e.target.value)}
                            required={true}
                        />
                        <Input 
                            type="email"
                            name="Email"
                            label="Email"
                            placeholder="Entrer votre email..."
                            onChange={e=>setEmail(e.target.value)}
                            required={true}
                        />
                        <Input 
                            type="password"
                            name="Password"
                            label="Mot de passe"
                            onChange={e=>setPassword(e.target.value)}
                            placeholder="Entrer votre mot de passe..."
                            required={true}
                        />
                    </div>
                    <input 
                        className="btn btn-black"
                        type="submit"
                        value="S'enregistrer"
                    />        
                </form>
            </div>
    )
}

export default register
