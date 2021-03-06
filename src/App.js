import React, {useState} from 'react';
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import './App.css';



const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let playable = true

// const correctLetter = [];
// const wrongLetters = [];


function App() {
  const [playable, setPlayable] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongtLetters, setWrongLetters] = useState([])

  return (
      <>
        <Header />
        <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
        </div>
      </>
  );
}

export default App;
