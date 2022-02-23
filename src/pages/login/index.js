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
                            label="Username"
                            placeholder="Enter your username..."
                            onChange={e=>setUsername(e.target.value)}
                            required
                        />
                        <Input 
                            type="password"
                            name="Password"
                            label="Password"
                            onChange={e=>setPassword(e.target.value)}
                            placeholder="Enter your password..."
                            required
                        />
                        
                    </div>
                    <input 
                        className="btn btn-black"
                        type="submit"
                        value="Connect"
                    />
                    <Link href='/register'>
                        <a className={styles.button__register}>Register?</a>
                    </Link>
                </form>
            </div>          
    )
}

export default login
