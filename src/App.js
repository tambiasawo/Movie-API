import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/characterGrid";
import Search from "./components/ui/Search";

export default function App() {
  //state: content items , func to change state: setItems
  //initial state is an empty array
  const [items, setItems] = useState([]);
  // isLoading: to see if state is still loading, setIsloading: change isloading state
  // initial state is set to true
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  //use axios to make our http req. axios returns a promise
  //and api call s howuld be made in the useEffect()
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result);
      setItems(result.data); //use the change state func to update it
      setIsLoading(false); // done loading so set i to false
    };

    fetchItems();
  }, [query]); //query here acts as a dependency, so whenever query chnages, the useEffect hook fires again

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}
