import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({images,openModal}) => {
  return (
    <ul className={style.gallery}>
      {images.map(({ name, id, webformatURL,index }) => {
        return (
          <ImageGalleryItem name={name} key={id} webformatURL={webformatURL} index={index} openModal={openModal} />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal:PropTypes.func.isRequired
};

export default ImageGallery;
