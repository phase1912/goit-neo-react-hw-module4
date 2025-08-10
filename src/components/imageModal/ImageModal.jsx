import React from "react";
import Modal from "react-modal";
import styles from "./modal.module.css";

const ImageModal = ({ image, onClose }) => {
    const { urls, alt_description, user, likes } = image;

    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName="overlay"
            ariaHideApp={false}
        >
            <div className={styles.modalContent}>
                <img src={urls.regular} alt={alt_description}/>
                <div className={styles.modalInfo}>
                    <p>Author: {user.name}</p>
                    <p>Likes: {likes}</p>
                    <p>Description: {alt_description || "No description"}</p>
                </div>
                <button className={styles.modalInfo} onClick={onClose}>
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default ImageModal;
