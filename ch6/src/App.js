import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm.js";
import ColorProvider from "./ColorProvider";

export default function App() {
  return (
    <ColorProvider>
        <AddColorForm />
        <ColorList />
    </ColorProvider>
  );
}
