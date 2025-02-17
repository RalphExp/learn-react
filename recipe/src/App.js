import logo from './logo.svg';
import './App.css';

import Menu from './Menu';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const data = [{
  name: "Baked Salmon",
  ingredients: [
    { name: "Salmon", amount: 1, measurement: "l lb" },
    { name: "Pine Nuts", amount: 1, measurement: "cup" },
    { name: "Butter Lettuce", amount: 2, measurement: "cups" },
    { name: "Yellow Squash", amount: 1, measurement: "med" },
    { name: "Olive Oil", amount: 0.5, measurement: "cup" },
    { name: "Garlic", amount: 3, measurement: "cloves" }
  ],
  steps: [
    "Preheat the oven to 350 degrees.",
    "Spread the olive oil around a glass baking dish.",
    "Add the yellow squash and place in the oven for 30 mins.",
    "Add the salmon, garlic, and pine nuts to the dish.",
    "Bake for 15 minutes.",
    "Remove from oven. Add the lettuce and serve."
  ]}, {
  name: "Fish Tacos",
  ingredients: [
    { name: "Whitefish", amount: 1, measurement: "l lb" },
    { name: "Cheese", amount: 1, measurement: "cup" },
    { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
    { name: "Tomatoes", amount: 2, measurement: "large" },
    { name: "Tortillas", amount: 3, measurement: "med" }
  ],
  steps: [
    "Cook the fish on the grill until hot.",
    "Place the fish on the 3 tortillas.",
    "Top them with lettuce, tomatoes, and cheese."
  ]}
];

function App() {
  return <Menu recipes={data} title="Delicious Recipes" />
}

export default App;
