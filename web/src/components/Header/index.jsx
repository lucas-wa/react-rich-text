import './styles.scss'
import Logo from "../../assets/Logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export function Header() {

    const { userState, signOut } = useContext(AuthContext);

    const navigate = useNavigate();

    function handleSignMenu() { }

    function handleRegisterMenu() { }

    return (
        <header className='Header'>
            <figure>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </figure>
            <nav>
                <ul>

                    {
                        userState ?
                            <li onMouseDown={e => handleRegisterMenu()}>
                                <Link className='logout_link' onClick={signOut}>
                                    Sair
                                </Link>
                            </li>
                            :
                            <>
                                <li onMouseDown={e => handleRegisterMenu()}>
                                    <Link to="/login">
                                        Entrar
                                    </Link>
                                </li>
                                <li onMouseDown={e => handleRegisterMenu()}>
                                    <Link to="/sign">
                                        Cadastrar
                                    </Link>
                                </li>
                            </>
                    }

                </ul>
            </nav>
        </header>
    )
}