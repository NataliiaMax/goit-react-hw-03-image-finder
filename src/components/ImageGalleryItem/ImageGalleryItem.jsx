import Modal from 'components/Modal/Modal';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export class ImageGalleryItem {
  state = {
    isModalOpen: false,
  };
  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { webformatURL, id, openModal, name, index } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <li
          key={id}
          className={style.galleryItem}
          onClick={() => openModal(index)}
        >
          <img src={webformatURL} alt={name} />
        </li>
        {isModalOpen && <Modal onClose={this.closeModal}></Modal>}
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
