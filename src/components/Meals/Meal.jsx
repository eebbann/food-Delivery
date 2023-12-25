import React from 'react';
import { meals } from '../Data/Data';
import Card from '../UI/Card';
import MealItem from './MealItem';
import MealsSummary from './MealsSummary';
import styles from './MealsSummary.module.css';
const Meal = () => {
	return (
		<>
			{/* <MealsSummary /> */}
			<div className={styles.card_holder}>
				<ul className={styles.block}>
					{meals.map((meal, index) => <MealItem key={meal.id || index} meal={meal}></MealItem>)}
				</ul>
			</div>
		</>

	);
};

export default Meal;