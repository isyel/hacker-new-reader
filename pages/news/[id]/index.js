import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Header from "../../../components/Header/Header";
import NewsItemList from "../../../components/NewsItemList/NewsItemList";
import { server } from "../../../config";
import styles from "../../../styles/Home.module.css";

const News = ({ response, itemResponse, errorMessage }) => {
	const router = useRouter();
	const { id } = router.query;
	const startingId = +id > 1 ? 30 * (+id - 1) : 1;
	return (
		<>
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
				<NewsItemList
					items={itemResponse}
					currentPage={+id}
					startingId={startingId}
				/>
			</main>
		</>
	);
};

export const getStaticProps = async (context) => {
	let response = [];
	let itemResponse = [];
	let errorMessage = "";
	try {
		// const res = await fetch(`${server}/api/stories/${context.params.id}`);
		// response = await res.json();
		// for await (let itemId of response.tempResponse) {
		// 	const itemRes = await fetch(`${server}/api/item/${itemId}`);
		// 	const item = await itemRes.json();
		// 	itemResponse.push(item);
		// }
	} catch (error) {
		errorMessage = error.message;
	}

	return {
		props: {
			response,
			itemResponse,
			errorMessage,
		},
	};
};

export const getStaticPaths = async () => {
	// const res = await fetch(`${server}/api/stories`);

	const items = (await res?.json()) || [];
	const noOfPages = items.tempResponse.length / 30;
	let ids = [];

	for (let i = 1; i <= noOfPages; i++) {
		ids.push(i);
	}

	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};

export default News;
