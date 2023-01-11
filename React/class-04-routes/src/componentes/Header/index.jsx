
import { Link, NavLink } from "react-router-dom"
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
                    <NavLink to ="/" className={({isActive}) => isActive ? 'active' : ''}><li>Home</li></NavLink>
                    <NavLink to ="/galeria" className={({isActive}) => isActive ? 'active' : ''}><li>Galeria</li></NavLink>
                    <NavLink to ="/contato" className={({isActive}) => isActive ? 'active' : ''}><li>Contato</li></NavLink>
                </ul>
            </nav>      
        </header>
    )
}