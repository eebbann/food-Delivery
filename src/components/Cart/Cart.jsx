import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css'
export default function Cart({closeCart}) {
	const cartItems = (
		<ul className={styles['cart-item']}>
{[{id:'c1', name : 'sushi', amount:2, price:19.1}].map(item=><div key={item.id}>{item.name}</div>)}
		</ul>
	)
	return (
		<Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={closeCart}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
	);
}
