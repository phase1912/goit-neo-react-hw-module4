import React from "react";
import ImageCard from "../imageCard/ImageCard";
import styles from "./imageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={styles.gallery}>
            {images.map((image) => (
                <li key={image.id} className={styles.galleryItem} onClick={() => onImageClick(image)}>
                    <ImageCard image={image}/>
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;
