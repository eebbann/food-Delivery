import React from 'react'
import { CartIcon} from '../Cart/CartIcon';
import styles from "./Header.module.css";

export const HeaderCart = () => {
	return (
		<button className={styles.btn}>
		 <span>
     <CartICon/>
		 </span>
		 <span className={styles.cart}> Your Cart</span>
		 <span className={styles.badge}>3</span>
		</button>
	)
}

 