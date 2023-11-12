import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/characterGrid";
import Search from "./components/ui/Search";

export default function App() {
  const [items, setItems] = useState([]);

  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const REQUEST_URL =
    query !== ""
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=95ec914d7a53a26b5d95bd29bdafd041&include_adult=false&language=en-US&page=1%27`
      : `https://api.themoviedb.org/3/discover/movie?api_key=95ec914d7a53a26b5d95bd29bdafd041&with_networks=213`;

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(REQUEST_URL);
      setItems(result.data.results); //use the change state func to update it
      setIsLoading(false); // done loading so set i to false
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}
