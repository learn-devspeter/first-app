import { useState } from 'react';
import styles from '../styles/Home.module.scss';
const { card } = styles;

export const Counter = () => {
	const [count, setCount] = useState(0);

	const incCount = () => setCount(count + 1);
	const decCount = () => setCount(count - 1);

	return (
		<div className={card}>
			<span>Counter {count} </span>
			<button onClick={incCount}>+</button>
			<button onClick={decCount}>-</button>
		</div>
	);
};
