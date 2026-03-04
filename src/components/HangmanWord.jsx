import React from "react"

import styles from "../styles/HangmanWord.module.css"

const HangmanWord = () => {
  const word = "test"
  const guessedLetters = ["t", "e", "u"]

  return (
    <div className={styles.container}>
      {word.split("").map((item, index) => (
        <span className={styles.letter} key={index}>
          <span
            style={{
              visibility: `${
                guessedLetters.includes(item) ? "visible" : "hidden"
              }`,
            }}
          >
            {item}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
