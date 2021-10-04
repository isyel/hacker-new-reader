import Head from "next/head";
import Header from "../components/Header/Header";
import NewsItemList from "../components/NewsItemList/NewsItemList";
import { server } from "../config";
import styles from "../styles/Home.module.css";

export default function Home({ response, itemResponse, errorMessage }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hacker New Reader</title>
				<meta
					name="description"
					content="Hacker News Reader from https://hackernews.api-docs.io/"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{errorMessage && <h3>{errorMessage}</h3>}

			<main className={styles.main}>
				<Header />
				<NewsItemList items={itemResponse} currentPage={1} startingId={0} />
			</main>
		</div>
	);
}

export const getStaticProps = async () => {
	let response = [];
	let itemResponse = [];
	let errorMessage = "";
	try {
		const res = await fetch(`${server}/api/stories/1`);
		response = await res.json();
		for await (let itemId of response.tempResponse) {
			const itemRes = await fetch(`${server}/api/item/${itemId}`);
			const item = await itemRes.json();
			itemResponse.push(item);
		}
	} catch (error) {
		errorMessage = error.message;
		console.log("errorMessage: ", error);
	}

	return {
		props: {
			response,
			itemResponse,
			errorMessage,
		},
	};
};
