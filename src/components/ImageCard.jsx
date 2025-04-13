import styles from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Unsplash image"}
      />
      <h2 className={styles.text}>{image.user.name}</h2>
    </div>
  );
};

export default ImageCard;
