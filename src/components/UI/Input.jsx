import React from 'react'
import styles from './Input.module.css'
const Input = (props) => {
	return (
		<div className={styles.input_main}>
		<label className={styles.label} htmlFor={props.input.id}>
		{props.label}
		</label>
		<input className={styles.input}{...props.input}/>
		</div>
	)
}

export default Input