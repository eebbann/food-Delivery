import React from 'react';
import styles from "./Header.module.css";
import bg from '../../assets/images/food-delivery.png';
import logo from '../../assets/images/image-logo.png';
import { HeaderCart } from './HeaderCart';
const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.log}>
					<img className={styles.logo} src={logo} alt='image here for food restaurant' />
					Bon-Restaurant</div>
				<HeaderCart onClick={props.showCart}/>
			</header>
			<div className={styles.main}>
				<img className={styles.img} src={bg} alt='image here for food restaurant' />
				<div className={styles.discount}>
					<span className={styles.or}>Our Discount</span>
					<h4 className={styles.h4}>of the Month</h4>
					<span className={styles.or}>In your Town</span>

				</div>
			</div>
		</>
	);
};

export default Header;