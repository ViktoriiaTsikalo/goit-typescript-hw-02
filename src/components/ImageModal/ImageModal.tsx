import Modal from "react-modal";
import styles from "./ImageModal.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
};

Modal.setAppElement("#root");
const ImageModal = ({ isOpen, onClose, imageUrl }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <img src={imageUrl} alt="Enlarged" />
    </Modal>
  );
};

export default ImageModal;
