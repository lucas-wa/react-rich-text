import './styles.scss'
import Logo from "../../assets/Logo.svg"
import google_icon from "../../assets/google-icon.svg"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from 'react';
import { api } from '../../lib/api';
import { Loader } from '../Loader';
import { signWithGoogle, firebaseApp } from "../../service/firebase";
import { UserContext } from '../../contexts/userContext';



export function SignModal() {

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const inputsRef = useRef([]);
    const googleSignButtonRef = useRef();


    async function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true)

        const res = await api.post("/createUser", {
            username,
            email,
            password
        });

        setIsLoading(false)

        inputsRef.current
            .forEach(input => {
                input.value = "";
            });

        setUsername("");
        setEmail("");
        setPassword("");

        if (res.status == 201) {
            navigate("/dashboard", { replace: true });
        }
    }

    async function handleCredentialResponse(res) {
        const credential = res.credential;

        setIsLoading(true)

        const response = await signWithGoogle(credential);

        setIsLoading(false)

        console.log(response.data)

        if (response.status == 200) {

            const { accessToken,
                refreshToken,
                username,
                email,
                avatar_url } = response.data;

            // console.log(accessToken, refreshToken)

            setUser({
                accessToken,
                refreshToken,
                username,
                email,
                avatar_url
            });

            document.cookie = `accessToken=${accessToken}; path=/; Secure; HttpOnly`;
            document.cookie = `refreshToken=${refreshToken}; path=/; Secure; HttpOnly`;

            navigate("/dashboard");
        }

    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
            googleSignButtonRef.current,
            {
                // type: "standard",
                theme: "filled_black",
                size: "medium",
                text: "continue_with",
                shape: "pill",
                width: "100%"
            }  // customization attributes
        );

        // google.accounts.id.prompt(); // also display the One Tap dialog

    }, [])

    return (
        <div className="SignModal">
            <header>
                <figure>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </figure>
            </header>

            <div className="formDiv">

                <form action="POST" onSubmit={e => handleSubmit(e)}>
                    <h2>Cadastrar</h2>
                    <input
                        required
                        ref={element => inputsRef.current[0] = element}
                        onChange={e => setUsername(e.target.value)}
                        type="text"
                        name="username"
                        id="input_username"
                        placeholder='Nome de usuário' />

                    <input
                        required
                        ref={element => inputsRef.current[1] = element}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="input_email"
                        placeholder='Email' />

                    <input
                        required
                        ref={element => inputsRef.current[2] = element}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        id="input_password"
                        placeholder='Senha' />


                    <button type="submit">
                        {isLoading ?
                            <Loader />
                            :
                            "Cadastrar"
                        }
                    </button>
                </form>
                <div className="OAuthSign" >

                    <div className="googleSign" ref={googleSignButtonRef}>

                    </div>

                    {/* <button onMouseDown={handleCredentialResponse}>
                        <img src={google_icon} alt="Google icon" />
                        Google
                    </button> */}
                </div>
            </div>


        </div>
    )
}