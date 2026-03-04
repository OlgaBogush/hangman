import React from "react"

import styles from "../styles/HangmanDrawing.module.css"

const HEAD = <div className={styles.head} />
const BODY = <div className={styles.body} />
const RIGHT_ARM = <div className={styles.rightArm} />
const LEFT_ARM = <div className={styles.leftArm} />
const RIGHT_LEG = <div className={styles.rightLeg} />
const LEFT_LEG = <div className={styles.leftLeg} />

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

const HangmanDrawing = ({ numberOfGuesses }) => {
  return (
    <div className={styles.gallows}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.roof} />
      <div className={styles.wall} />
      <div className={styles.floor} />
      <div className={styles.tail} />
    </div>
  )
}

export default HangmanDrawing
