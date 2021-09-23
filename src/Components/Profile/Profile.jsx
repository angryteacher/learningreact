import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./ProfileInfo/ProfileInfo.module.css";
import banner from "./banner.gif";

function Profile(props) {
    return (
        <div>
            <div className={s.pic}>
                <img src={banner} alt=""/>
            </div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;