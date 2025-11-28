import React from 'react'

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

export default function Peoples() {
    // const chemist = people.filter(people => people.profession == "chemist").map(che => <li>{che.profession}</li>)
    const chemist = people.filter(people => people.profession == "chemist")
    const listItem = chemist.map(che => <li key={che.id}>{che.name}</li>)
  return (
    <div>
      <ul>
         {listItem}
         {/* {chemist} */}
      </ul>
    </div>
  )
}
