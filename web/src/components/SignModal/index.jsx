import './styles.scss'
import Logo from "../../assets/Logo.svg"
import google_icon from "../../assets/google-icon.svg"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from 'react';
import { api } from '../../lib/api';
import { Loader } from '../Loader';
import { AuthContext } from '../../contexts/auth';



export function SignModal() {

    const { userState, signIn } = useContext(AuthContext);
    
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const googleSignButtonRef = useRef();

    async function handleCredentialResponse(res) {
        const credential = res.credential;

        setIsLoading(true);

        await signIn(credential);

        setIsLoading(false);

        console.log(userState)

        if(userState) navigate("/dashboard");

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

    useEffect(() => {
        if(userState) navigate("/dashboard");
    }, [userState]);

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