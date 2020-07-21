import React from 'react'

function FunctionalListRendering() {
  // example 1
  const names = ['Bruce', 'Clark', 'Diana'];
  const nameList = names.map(name => <h3>{name}</h3>);

  // example 2
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    },
  ];

  const personList = persons.map(person => (
    <h3 key={person.id}>
      I am {person.name}. I am {person.age} years old. I know {person.skill}.
    </h3>
  ));

  return <div>{personList}</div>;
}

export default FunctionalListRendering
