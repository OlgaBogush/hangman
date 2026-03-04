import React from "react"

import styles from "../styles/HangmanWord.module.css"

const HangmanWord = ({ word, clickedLetters, reveal }) => {
  return (
    <div className={styles.container}>
      {word.split("").map((item, index) => (
        <span className={styles.letter} key={index}>
          <span
            style={{
              visibility:
                clickedLetters.includes(item) || reveal ? "visible" : "hidden",
              color: !clickedLetters.includes(item) && reveal ? "red" : "",
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
