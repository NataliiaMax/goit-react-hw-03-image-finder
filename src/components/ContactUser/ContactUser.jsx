import PropTypes from 'prop-types';
import style from './ContactUser.module.css';

const ContactUser = ({ name, number, userId, deleteUser }) => {
  return (
    <li key={userId} className={style.itemUser}>
      <p className={style.itemText}>{name}: </p>
      <p className={style.itemText}>{number}</p>
      <button className={style.buttonDelete} onClick={() => deleteUser(userId)}>
        Delete
      </button>
    </li>
  );
};

ContactUser.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default ContactUser;
