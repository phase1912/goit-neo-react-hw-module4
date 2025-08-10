import './App.css'
import SearchBar from "./components/searchBar/SearchBar.jsx";
import {useState} from "react";
import ImageGallery from "./components/imageGallery/ImageGallery.jsx";
import Loader from "./components/loader/Loader.jsx";
import ErrorMessage from "./components/errorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/imageModal/ImageModal.jsx";
import axios from "axios";

function App() {
    const ACCESS_KEY = "AroHhjr4JMewmcId3JKkX6Gb9RoGizp9KVEY3f-8VpI";
    const BASE_URL = "https://api.unsplash.com/search/photos";

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentQuery, setCurrentQuery] = useState("");

    const handleSearch = async (query) => {
        try {
            setLoading(true);
            setError(null);
            setImages([]);
            setPage(1);
            setCurrentQuery(query);

            const response = await axios.get(`${BASE_URL}`, {
                params: {
                    query,
                    page: 1,
                    per_page: 12
                },
                headers: {
                    Authorization: `Client-ID ${ACCESS_KEY}`
                }
            });

            setImages(response.data.results);
            setTotalPages(response.data.total_pages);
        } catch (error) {
            setError("Failed to fetch images. Please try again.");
            setImages([]);
            setCurrentQuery("");
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        if (page >= totalPages) {
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(`${BASE_URL}`, {
                params: {
                    query: currentQuery,
                    page: page + 1,
                    per_page: 12
                },
                headers: {
                    Authorization: `Client-ID ${ACCESS_KEY}`
                }
            });

            setImages((prevImages) => [...prevImages, ...response.data.results]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            setError("Failed to load more images. Please try again.");
            setImages([]);
            setCurrentQuery("");
        } finally {
            setLoading(false);
        }
    };

    const openModal = (image) => {
        setShowModal(true);
        setSelectedImage(image);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div className="app-container">
            <SearchBar onSubmit={handleSearch}/>
            {error && <ErrorMessage message={error}/>}
            {images.length > 0 && (
                <ImageGallery images={images} onImageClick={openModal}/>
            )}
            {loading && <Loader/>}
            {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore}/>}
            {showModal && (
                <ImageModal image={selectedImage} onClose={closeModal}/>
            )}
        </div>
    )
}

export default App;
