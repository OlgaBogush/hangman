import React from "react"

import styles from "../styles/Keyboard.module.css"

import getLetters from "../helpers/getLetters"

const KEYS = getLetters()

const Keyboard = () => {
  return (
    <div className={styles.container}>
      {KEYS.map((item, index) => (
        <button key={index} className={`${styles.btn}`}>
          {item}
        </button>
      ))}
    </div>
  )
}

export default Keyboard
