import React from 'react'
import cards from "./Cards.module.css"
import styles from"./Cards.module.css"
const Card = ({children }) => {
	return (
		<div className={styles.cards}>{children}</div>
	)
}

export default Card