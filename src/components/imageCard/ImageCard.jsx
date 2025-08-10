import React from "react";
import styles from "./imageCard.module.css";

const ImageCard = ({ image }) => {
    return (
        <div className={styles.imageCard}>
            <img src={image.urls.small} alt={image.description}/>
        </div>
    );
};

export default ImageCard;
