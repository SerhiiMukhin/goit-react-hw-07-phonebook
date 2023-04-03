import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.main_title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts_title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

// export default class App extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   onSubmit = event => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;
//     if (
//       this.state.contacts.some(({ name: contactName }) => contactName === name)
//     ) {
//       alert(`${name} is already in contacts!`);
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [...contacts, { id: nanoid(), name, number }],
//       }));
//       form.reset();
//     }
//   };

//   searchContact = event => {
//     this.setState({ filter: event.target.value });
//   };

//   deleteContact = event => {
//     const id = event.currentTarget.value;
//     this.setState({
//       contacts: this.state.contacts.filter(contact => contact.id !== id),
//     });
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     return (
//       <div className={css.wrapper}>
//         <h1 className={css.main_title}>Phonebook</h1>
//         <ContactForm onSubmit={this.onSubmit}></ContactForm>
//         <h2 className={css.contacts_title}>Contacts</h2>
//         <Filter filter={filter} searchContact={this.searchContact}></Filter>
//         <ContactList
//           contacts={contacts}
//           filter={filter}
//           deleteContact={this.deleteContact}
//         ></ContactList>
//       </div>
//     );
//   }
// }
