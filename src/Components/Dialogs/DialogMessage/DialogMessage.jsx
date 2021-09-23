import React from 'react';
import s from '../Dialogs.module.css'

function DialogMessage(props) {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}

export default DialogMessage;