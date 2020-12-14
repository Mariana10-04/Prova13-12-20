import React, { useState } from 'react';
import './header.css';
import { Link } from "react-router-dom"
import logo from './pages/logo/logo.png'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const show = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className="header-content">
            <nav className="navBar">

              <img src={logo} alt="Logo" />

                <ul className={showMenu !== true ? 'ul-header' : 'ul-header show-ul'}> 

                    <li className="li-header"><Link onClick={show} className="link" to="/">Home</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/cadastro">Cadastro</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header