// import React from 'react'
import { createRoot } from "react-dom/client";
// import Pet from './Pet'
import SearchParams from "./SearchParams";
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       animal: "DOG",
//       name: "Rockey",
//       breed: "German Shephard",
//     }),
//     React.createElement(Pet, {
//       animal: "CAT",
//       name: "Mewo",
//       breed: "Persian Classic",
//     }),
//   ]);
// };

//Making the jsx version of the Pet

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
