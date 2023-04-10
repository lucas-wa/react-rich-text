import './styles.scss'
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom"


export function LoginModal() {

    function handleSubmit(e) {
        e.preventDefault();
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
                <input type="text" name="login" id="input_login" placeholder='Email ou username' />
                <input type="password" name="password" id="input_password" placeholder='Senha' />
            </form>
        </div>
    )
}