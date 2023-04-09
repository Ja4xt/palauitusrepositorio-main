import React, { useState } from "react";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
//import Filter from "./components/Filter";
/*
JM fullstackopen 2023 
puhelinluettelo
*/
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 }
  ]);
  const [newFilter, setNewFilter] = useState("");
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <Filter newFilter={newFilter} setNewFilter={setNewFilter} /> */}
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <PersonList persons={filteredPersons} />
    </div>
  );
};

export default App;
