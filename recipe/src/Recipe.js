import React from "react";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";

export default function Recipe({ name, ingredients, steps }) {
    return (
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <Ingredients list={ingredients} />
        <Instructions title="Cooking Instructions" steps={steps} />
      </section>
    );
  }