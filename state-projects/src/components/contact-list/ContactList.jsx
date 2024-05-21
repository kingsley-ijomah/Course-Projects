import React, { useState, useEffect } from 'react';
import data from './data.json';
import './ContactList.scss'

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheckAllChange = (isChecked) => {
    setCheckAll(isChecked);
    setContacts(
      contacts.map((contact) => ({ ...contact, checked: isChecked }))
    );
  };

  const handleCheckboxChange = (id, isChecked) => {
    const updatedContact = contacts.map((contact) => {
      if (contact.id === id) {
        return { ...contact, checked: isChecked };
      }
      return contact;
    });
    setContacts(updatedContact);
  };

  const handleDeleteSelectedContacts = () => {
    setContacts(contacts.filter((contact) => !contact.checked));
  };

  useEffect(() => {
    setContacts(data);
  }, []);

  return (
    <div className='contacts'>
      <h1>Contact List</h1>
      <input
        type="checkbox"
        checked={checkAll}
        onChange={(e) => handleCheckAllChange(e.target.checked)}
      />
      <span>Check All</span>
      <hr />

      {contacts.map((contact) => (
        <div key={contact.id} className='contacts__item'>
          <input
            type="checkbox"
            checked={contact.checked}
            onChange={(e) => handleCheckboxChange(contact.id, e.target.checked)}
          />
          <span>
            {contact.name} ({contact.email})
          </span>
        </div>
      ))}
      <hr />
      <button onClick={handleDeleteSelectedContacts}>
        Delete Selected Contacts
      </button>
    </div>
  );
}
