import type { FC } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

export interface SearchBarProps {
  onSubmit: (searchQuery: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (formData: FormData) => {
    const query = (formData.get("search") as string).trim();

    if (!query) {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.brand}>Powered by TMDB</span>

        <form action={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="search"
            placeholder="Search movies..."
            autoComplete="off"
          />

          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
