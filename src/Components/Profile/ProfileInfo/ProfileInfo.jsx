import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.about}>
                <div className={s.ava}>
                    <img src={profile.photos.large} alt=""/>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <div className={s.info}>
                    <h1>Степан Навозов</h1>
                    <p>Город: Урюпинск</p>
                    <p>Дата рождения: 29.02.1990</p>
                    <p>Образование: УРГПУ при НКПИ им.Ф.Дзержинского</p>
                    <p>Сайт: </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;