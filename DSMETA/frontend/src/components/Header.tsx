import logo from '../assets/images/logo.svg'
import './Header.css';

const Header = () => {
    return(
        <header>
            <div className="container-header">
                <div>
                    <img src={logo} alt="Logo DSMeta" />
                </div>
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a target="_blank" href="https://github.com/thisd92">Thiago</a></p>
            </div>
        </header>
    )
}

export default Header;