import styles from '../styles/Home.module.scss';
import { Counter } from '../components/counter';

export const Main = () => (
	<main className={styles.main}>
		<Counter />
	</main>
);
