
import { Link } from "react-router-dom"
import logo from '../../assets/react.svg'
import "./style.css"

export function Header() {
    return (
        <header>
            <div className="containerLogo">
                <Link to = { "/" }>
                <img src= { logo } alt="" />
                </Link>
                <h1> Class House </h1>
            </div>
            <nav>
                <ul>
                    <Link to ="/"><li>Home</li></Link>
                    <Link to ="/galeria"><li>Galeria</li></Link>
                    <Link to ="/contato"><li>Contato</li></Link>
                </ul>
            </nav>      
        </header>
    )
}