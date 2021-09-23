import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {

    let path = '/Dialogs/' + props.id;

    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;