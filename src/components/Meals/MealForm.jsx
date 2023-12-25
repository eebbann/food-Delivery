import React from 'react'
import Input from '../UI/Input';
import styles from './MealsSummary.module.css'
const MealForm = () => {
	return (
		<form className={styles.form}> 
		<Input label="Amount" input=
		{{
			id:'amount',
			type:'number',
			min:"1",
			max:"10",
			step:"1",
      defaultValue: "1"
		}}/>
		<button className={styles.bttn}>Add</button>
		</form>
	)
}

export default MealForm