import React from "react";
import CharacterItem from "./characterItem";
import Spinner from "../ui/spinner";
const characterGrid = ({ isLoading, items }) => {

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default characterGrid;
