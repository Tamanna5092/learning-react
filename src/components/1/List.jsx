// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

import Recipe from "./Recipe";

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

  const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}


export default function List() {
  // const recipeItems = recipes.map(recipe => (
  //   <div key={recipe.id}>
  //     <h2>{recipe.name}</h2>
  //     <ul>{recipe.ingredients.map(ingredint => <li key={ingredint}>{ingredint}</li>)}</ul>
  //   </div>
  // ))
      const chem = people.filter(person => person.profession === "chemist")
      const chemist =chem.map(che => <li key={che.id}>{che.name}</li>)
      const everyOne = people.filter(every => every.profession !== "chemist")
      const others = everyOne.map(oth => <li key={oth.id}>{oth.name}</li>)
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
      <h1>My filter components</h1>
        <ul>{chemist}</ul>
        <h1>Other components</h1>
        <ul>{others}</ul>
        <div>
          {/* <Recipe recipeItems={recipeItems}></Recipe> */}
          {
            recipes.map(recipe => <Recipe key={recipe.id} {...recipe}></Recipe>)
          }
        </div>
    </article>
  );
}
