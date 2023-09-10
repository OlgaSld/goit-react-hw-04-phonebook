// import { Component } from "react"
// import { ContactForm } from "./ContactsForm/ContactForm";
// import { ContactsList } from "./ContactList/ContactList";
// import { nanoid } from "nanoid";
// import { Layout, Subtitle, Title } from "./Layout";
// import { Filter } from "./Filter/Filter";

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//    this.setState({
//      contacts: JSON.parse(savedContacts),
//    });
//  }
//   }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContact = contact => {
  //   const normalized = contact.name.toLowerCase();

  //   if (
  //     this.state.contacts.find(({ name }) => name.toLowerCase() === normalized)
  //   ) {
  //     return alert(`${contact.name} is already in contacts!`);
  //   }

  //   this.setState(prevState => ({
  //     contacts: [
  //       ...prevState.contacts,
  //       {
  //         id: nanoid(),
  //         ...contact,
  //       },
  //     ],
  //   }));
  // };

  // changeFilter = newFilter => {
  //   this.setState({ filter: newFilter });
  // };

  // getFilterContacts = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter(contact => {
  //     const filterCont = contact.name.toLowerCase().includes(filter.toLowerCase());
  //   return filterCont;
  //   });
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(({id}) => {
  //       return id !== contactId;
  //     }),
  //   }));
  // };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getFilterContacts();
//     // return (
//     //   <Layout>
//     //     <Title>Phonebook</Title>
//     //     <ContactForm onAdd={this.addContact} />
//     //     <Subtitle>Contacts</Subtitle>
//     //     <Filter value={filter} onChangeFilter={this.changeFilter} />
//     //     <ContactsList contacts={visibleContacts} onDelete={this.deleteContact} />
//     //   </Layout>
//     // );
//   }
// };
