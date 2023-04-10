import './styles.scss'
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom"


export function SignModal() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="SignModal">
            <header>
                <figure>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </figure>
            </header>
            
            <form action="POST" onSubmit={e => handleSubmit(e)}>
                <h2>Cadastrar</h2>
                <input type="text" name="username" id="input_username" placeholder='Nome de usuário' />
                <input type="email" name="email" id="input_email" placeholder='Email' />
                <input type="password" name="password" id="input_password" placeholder='Senha' />
            </form>
        </div>
    )
}