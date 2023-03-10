import React from "react";


export default function ContactList({ contacts , onDelete}) {
    return (
         <ul>
          {contacts.map(contact => (
        <li key={contact.id}>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
        <button onClick={() => onDelete(contact.id)}>Delete</button>      
          </li>
        ))}
        </ul>
    )
}

