import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/nophoto.jpg';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/Profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id);
                                  }}>Отписаться</button>
                        : <button disabled={ followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>Подписаться</button>}
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>
        </div>)
}

export default User;
