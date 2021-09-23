import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormControls/FormControls.module.css";

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe ", null, Input, {type: "checkbox"}, "remember me")}
            {error && <div className={styles.formError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
)
}

const LoginReduxForm = reduxForm({
    form: "login"
}) (LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default  connect( mapStateToProps, {login}) (Login);