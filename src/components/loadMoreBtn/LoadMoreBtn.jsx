import React from "react";
import styles from "./loadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
    return (
        <button className={styles.loadMoreBtn} onClick={onClick}>
            Load more
        </button>
    );
};

export default LoadMoreBtn;
