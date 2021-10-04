import { server } from "../../../config";

const apiUrl = "https://hacker-news.firebaseio.com/v0/";

export default async ({ query: { id } }, res) => {
	let tempResponse = [];
	let end = 30 * +id;
	let start = end - 30;
	let errorMessage = "";
	try {
		const res = await fetch(`${apiUrl}topstories.json`);
		tempResponse = await res.json();
		tempResponse = tempResponse.slice(start, end);
	} catch (error) {
		errorMessage = error.message;
	}
	res.json({ tempResponse });
};
