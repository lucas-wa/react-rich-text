import './styles.scss'
import Logo from "../../assets/Logo.svg"
import { Link, useNavigate } from "react-router-dom";

export function Header() {

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
                </ul>
            </nav>
        </header>
    )
}