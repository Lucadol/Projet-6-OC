import { NavLink } from "react-router-dom"
import './Header.scss'
import logo from '../../assets/logo_titre.png'

export function Header () {
    return (
        <div className="header">
            <img src={logo} alt="logo kasa" />
            <nav>
                <NavLink to ="/">Accueil</NavLink>
                <NavLink to ="/a-propos">A Propos</NavLink>
            </nav>
        </div>
    )
}