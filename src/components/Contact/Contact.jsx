import css from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <>
      <li className={css.ContactItem}>
        <p className={css.ContactName}>{contact.name}</p>
        <p className={css.ContactNumber}>{contact.number}</p>
        <button
          className={css.ContactItemButton}
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
