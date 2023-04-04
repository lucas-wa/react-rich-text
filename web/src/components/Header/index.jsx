import './styles.scss'
import Logo from "../../assets/Logo.svg"

export function Header(){
    return (
        <header className='Header'>
            <figure>
                <img src={Logo} alt="Logo" />
            </figure>
            <nav>
                <ul>
                    <li>Entrar</li>
                    <li>Cadastrar</li>
                </ul>
            </nav>
        </header>
    )
}