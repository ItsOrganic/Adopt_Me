import { useState } from "react";
const Animals = ["cat","dog","rabbit","reptile"]

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animals,setAnimals] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" 
          onChange={(e)=> {setLocation(e.target.value)}}
        value={location}
         placeholder="location" />
        </label>
        <label htmlFor="animals">
          <select
          id="animals"
          value={animals}
          onChange={(e) => {
            setAnimals(e.target.value)
          }
        } >
          <option/>
          {Animals.map((animals) => (
            <option key={animals}>{animals}</option>
          ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
