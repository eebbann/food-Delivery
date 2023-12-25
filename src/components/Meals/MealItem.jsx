import React from 'react';
import Card from '../UI/Card';
import MealForm from './MealForm';
import styles from './MealsSummary.module.css';

function MealItem({ meal }) {
	return (
		<Card>

			<div className={styles.head}>
				<span>{meal.name} <span className={styles.pole}>|</span> ${meal.price}
				</span>
				<MealForm />
			</div>
			<div className={styles.detail}>
				{meal.details}
			</div>

		</Card>
	);
}

export default MealItem;