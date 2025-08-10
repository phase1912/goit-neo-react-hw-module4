import React, {useState} from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) {
            alert("Please enter a search term!");
            return;
        }
        onSubmit(query);
    };

    return (
        <header className={styles.searchBar}>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

export default SearchBar;
