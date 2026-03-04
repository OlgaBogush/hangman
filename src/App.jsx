import React, { useCallback, useEffect, useState } from "react"

import "./index.css"

import words from "../words.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

const App = () => {
  const [word, setWord] = useState(getRandomWord)
  const [clickedLetters, setClickedLetters] = useState([])

  const incorrectLetters = clickedLetters.filter((item) => !word.includes(item))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = word.split("").every((item) => clickedLetters.includes(item))

  const addClickedLetter = useCallback(
    (letter) => {
      if (clickedLetters.includes(letter) || isLoser || isWinner) return
      setClickedLetters((prev) => [...prev, letter])
    },
    [clickedLetters, isLoser, isWinner]
  )

  useEffect(() => {
    console.log(word)
  }, [word])

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      if (!e.key.match(/^[a-z]$/)) return
      addClickedLetter(e.key)
    }
    document.addEventListener("keydown", handler)
    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [clickedLetters])

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      if (e.key !== "Enter") return
      setClickedLetters([])
      setWord(getRandomWord())
    }
    document.addEventListener("keydown", handler)
    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [])

  return (
    <>
      <div className="container">
        <div className="title">
          {isWinner && "Winner! - Refresh to try again"}
          {isLoser && "Nice Try - Refresh to try again"}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord
          word={word}
          clickedLetters={clickedLetters}
          reveal={isLoser}
        />
        <div className="wrapper">
          <Keyboard
            disabled={isLoser || isWinner}
            activeLetters={clickedLetters.filter((item) => word.includes(item))}
            inactiveLetters={incorrectLetters}
            addClickedLetter={addClickedLetter}
          />
        </div>
      </div>
    </>
  )
}

export default App
