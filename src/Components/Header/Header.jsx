import React from 'react';
import s from '../Header/Header.module.css';
import logo from '../Header/logo.png';
import {NavLink} from "react-router-dom";

function Header(props) {
   return (
      <div className={s.header}>
         <img className={s.logo} src={logo} alt=""/>
         <h1>ЧЕЛОСОС</h1>
          <div className={s.loginBlock}>
              {props.isAuth
                  ? <div>{props.login}<button onClick={props.logout}>Logout</button></div>
                  :<NavLink to={'/login'}>Login</NavLink>}

          </div>
      </div>
   );
}

export default Header;