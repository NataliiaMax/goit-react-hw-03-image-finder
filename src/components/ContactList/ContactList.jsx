import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import ContactUser from '../ContactUser/ContactUser';

const ContactList = ({ contacts, deleteUser }) => {
  return (
    <ul className={style.listUsers}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactUser
            deleteUser={deleteUser}
            key={id}
            name={name}
            number={number}
            userId={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteUser: PropTypes.func.isRequired,
};

export default ContactList;
