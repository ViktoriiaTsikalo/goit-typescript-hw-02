import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

type Props = {
  onSubmit: (query: string) => void;
};

const SearchBar = ({ onSubmit }: Props) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const query = form.elements.namedItem("query") as HTMLInputElement;

    const trimmed = query.value.trim();

    if (trimmed === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(trimmed);
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
