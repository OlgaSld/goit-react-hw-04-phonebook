import { useEffect, useState } from 'react';
import { ContactForm } from './ContactsForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Layout, Subtitle, Title } from './Layout';
import { Filter } from './Filter/Filter';
import { useLocalStorage } from './LocalStorage';

const contactData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', contactData);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    const newContactId = { id: nanoid(), ...newContact };

    setContacts(prevContacts => {
      return [...prevContacts, newContactId];
    });
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const visibleContacts = contacts.filter(contact => {
    const filterCont = contact.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    return filterCont;
  });

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm onAdd={addContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactsList contacts={visibleContacts} onDelete={deleteContact} />
    </Layout>
  );
};
