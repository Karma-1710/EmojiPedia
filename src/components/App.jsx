import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";


function creatCard(emojis){
  return(<Card 
    key = {emojis.id}
    emoji = {emojis.emoji}
    name = {emojis.name}
    description = {emojis.meaning}
  />)
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(creatCard)}
      </dl>
    </div>
  );
}

export default App;
