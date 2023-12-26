import React from 'react'
import { CartIcon} from '../Cart/CartIcon';
import styles from "./Header.module.css";

export const HeaderCart = (props ) => {
	return (
		<>
			<button onClick={props.onClick} className={styles.btn} >
		 <span>
     <CartIcon/>
		 </span>
		 <span className={styles.cart}  >Your Cart</span>
		 <span className={styles.badge}>3</span>
		</button>
		</>
		
	)
}

 