import { server } from "../../../config";

const News = ({ response, itemResponse, errorMessage }) => {
	console.log("apiResponse: ", response);
	// console.log("itemResponse: ", itemResponse);
	return <h1>New Page</h1>;
};

export const getStaticProps = async (context) => {
	let response = [];
	let itemResponse = [];
	let errorMessage = "";
	try {
		const res = await fetch(`${server}/api/stories/${context.params.id}`);
		response = await res.json();
		for await (let itemId of response.tempResponse) {
			const itemRes = await fetch(`${server}/api/item/${itemId}`);
			const item = await itemRes.json();
			itemResponse.push(item);
		}
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
	const res = await fetch(`${server}/api/stories`);

	const items = await res.json();
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
