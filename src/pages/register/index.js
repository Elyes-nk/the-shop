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
                            placeholder="Enter your username..."
                            onChange={e=>setUsername(e.target.value)}
                            required={true}
                        />
                        <Input 
                            type="email"
                            name="Email"
                            label="Email"
                            placeholder="Enter your email..."
                            onChange={e=>setEmail(e.target.value)}
                            required={true}
                        />
                        <Input 
                            type="password"
                            name="Password"
                            label="Password"
                            onChange={e=>setPassword(e.target.value)}
                            placeholder="Enter your password..."
                            required={true}
                        />
                    </div>
                    <input 
                        className="btn btn-black"
                        type="submit"
                        value="Register"
                    />        
                </form>
            </div>
    )
}

export default register
