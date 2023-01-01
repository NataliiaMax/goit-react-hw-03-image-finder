import style from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = (largeImageURL, name, closeModal) => {
  return (
    <div className={style.overlay} onClick={() => closeModal}>
      <div className={style.modal}>
        <img src={largeImageURL} alt={name} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
