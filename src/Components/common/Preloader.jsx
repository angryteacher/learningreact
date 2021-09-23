import styles from "../Users/Users.module.css";
import preloader from "../../assets/images/preloader.gif";
import React from "react";

const Preloader = () => {
    return<div><img className={styles.preloader} src={preloader}/></div>
}

export default Preloader;