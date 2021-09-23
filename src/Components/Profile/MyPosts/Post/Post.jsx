import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <img src='https://pbs.twimg.com/profile_images/1373246348846379014/ddQbeETU.jpg' alt=""/>
            {props.message}
            <div>
                Likes: {props.likesCount}
            </div>
        </div>

    );
}

export default Post;