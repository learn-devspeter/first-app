import Head from 'next/head';

import { Main, Header, Footer } from '../layout';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Counter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
