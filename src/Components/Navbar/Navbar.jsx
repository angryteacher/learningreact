import React from 'react';
import s from '../Navbar/Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={s.navlist}>
            <ul>
                <li>
                    <NavLink to='/Profile' activeClassName={s.activeLink}>Профиль</NavLink>
                </li>
                <li>
                    <NavLink to='/Dialogs' activeClassName={s.activeLink}>Сообщения</NavLink>
                </li>
                <li>
                    <NavLink to='/Users' activeClassName={s.activeLink}>Найти друзей</NavLink>
                </li>
                <li>
                    <NavLink to='/News' activeClassName={s.activeLink}>Новости</NavLink>
                </li>
                <li>
                    <NavLink to='/Music' activeClassName={s.activeLink}>Музыка</NavLink>
                </li>
                <li>
                    <NavLink to='/Settings' activeClassName={s.activeLink}>Настройки</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;