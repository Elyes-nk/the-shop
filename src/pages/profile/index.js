import React,{useState, useEffect} from 'react'
import styles from './index.module.scss'
import Title from '../../components/ui/title/Title'
import Input from '../../components/ui/input/Input'

function index() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async() => {
        e.preventDefault();
       
    }
    
    return (
        <div>
            <Title title="Your account"/>
            <form className={styles.form__profil} onSubmit={()=>handleSubmit()}>
                <Input 
                    type="text" 
                    value={username} 
                    label="Nom"
                    name="name" 
                    onChange={e=>setUsername(e.target.value)}
                />
                <Input 
                    type="email" 
                    value={email} 
                    label="Email"
                    name="email"
                    onChange={e=>setEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    label="Mot de passe"
                    onChange={e=>setPassword(e.target.value)}
                />
    
                
                <input className="btn btn-black" type="submit" />
            </form>
        </div>
    );
}

export default index
