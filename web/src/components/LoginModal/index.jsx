import './styles.scss'
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom"
import { useRef, useState } from 'react';
import { api } from '../../lib/api';
import { Loader } from '../Loader';

export function LoginModal() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const inputRefs = useRef([]);

    async function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true)

        const res = await api.post("/sign", {
            login,
            password
        });

        setIsLoading(false)

        inputRefs.current
            .forEach(input => {
                input.value = "";

            });

        setLogin("");
        setPassword("");

        if(res.status == 200){
            
        }

    }

    return (
        <div className="LoginModal">
            <header>
                <figure>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </figure>
            </header>

            <form action="POST" onSubmit={e => handleSubmit(e)}>
                <h2>Entrar</h2>

                <input
                    required
                    ref={element => inputRefs.current[0] = element}
                    onChange={e => setLogin(e.target.value)}
                    type="text"
                    name="login"
                    id="input_login"
                    placeholder='Usuário ou email' />

                <input
                    required
                    ref={element => inputRefs.current[1] = element}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="input_password"
                    placeholder='Senha' />


                <button type="submit">
                    {isLoading ?
                        <Loader />
                        :
                        "Entrar"
                    }
                </button>
            </form>
        </div>
    )
}