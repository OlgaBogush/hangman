import React from "react"

import styles from "../styles/Keyboard.module.css"

import getLetters from "../helpers/getLetters"

const KEYS = getLetters()

const Keyboard = ({
  disabled = false,
  activeLetters,
  inactiveLetters,
  addClickedLetter,
}) => {
  return (
    <div className={styles.container}>
      {KEYS.map((item, index) => {
        const isActive = activeLetters.includes(item)
        const isInactive = inactiveLetters.includes(item)

        return (
          <button
            onClick={() => addClickedLetter(item)}
            key={index}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isActive || isInactive || disabled}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
