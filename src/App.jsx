import React, { useState } from "react"

import "./index.css"

import words from "../words.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

const App = () => {
  const [word, setWord] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  )
  const [guessedLetters, setGuessedLetters] = useState([])

  return (
    <>
      <div className="container">
        <div className="title">Lose Win</div>
        <HangmanDrawing />
        <HangmanWord />
        <div className="wrapper">
          <Keyboard />
        </div>
      </div>
    </>
  )
}

export default App
