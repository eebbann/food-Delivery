import React from 'react'
import {ShoppingCartIcon } from '@heroicons/react/24/solid';
import styles from "./Cart.module.css"

export const CartIcon = () => {
	return (
		<div>
			<div className={styles["bin_bin"]} > 
				<ShoppingCartIcon width={34} height={34}/>
				</div>
		</div>
	)
}
