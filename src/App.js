import React, { useState } from "react";
import "./styles.css";

const emojiDisctionary = {
  "🙂": "smiling",
  "❤️": "heart",
  "🥺": "sad",
  "👍": "like",
  "😲": "astonsihed",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "😑": "annoyance",
  "🤫": "shhhh!"
};

var emojisWeKnow = Object.keys(emojiDisctionary);

// var userName = prompt("give me your name");
var userName = "Akshay";
var color = "blue";

export default function App() {
  var [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDisctionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  const emojiClickHandler = (emoji) => {
    var meaning = emojiDisctionary[emoji];
    setMeaning(meaning);

    console.log(emoji);
  };

  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color }}>{userName}</span>
      </h1>
      <input onChange={inputChangeHandler} />
      <div>
        <h2>{meaning}</h2>
      </div>
      <div>
        <h3>emojis we know</h3>
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              style={{ fontSize: "1.5rem", padding: "0.5 rem" }}
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Everything about react  |
 *                        v
 * VISER
 * view -> interact -> update State in Even Handler -> Render
 */
