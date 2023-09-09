import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";

export default function App() {
  const [colors, setColors] = useState(colorData);

  const removeColor = id => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map(color =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const addColor = (title, color) => {
    const newColors = [...colors, {
        id: Date.now(),
        title: title,
        rating: 5,
        color: color
    }];
    setColors(newColors)
  }

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
            alert(`TODO: Create ${title} - ${color}`)
            addColor(title, color)
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={removeColor}
        onRateColor={rateColor}
      />
    </>
  );
}
