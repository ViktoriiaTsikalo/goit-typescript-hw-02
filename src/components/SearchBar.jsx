import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    if (query === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
