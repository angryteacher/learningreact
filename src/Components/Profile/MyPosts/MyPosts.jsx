import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    //let newPostText = props.newPostText;

    let addNewPostText = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={s.myPosts}>
                <h1>Моя стена</h1>
                <MyPostsFormRedux onSubmit={addNewPostText}/>
            </div>
            <div className={s.userPosts}>
                {postsElements}
            </div>
        </div>
    );
});

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} component={Textarea} name="newPostText"
                       placeholder="Расскажите о чем-нибудь"/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm({form: "myPostsAddTextForm"})(MyPostsForm);

export default MyPosts;