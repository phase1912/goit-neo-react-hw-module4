import React from "react";
import styles from "./errorMessage.module.css";

const ErrorMessage = ({ message }) => {
    return <div className={styles.errorMessage}>{message}</div>;
};

export default ErrorMessage;
