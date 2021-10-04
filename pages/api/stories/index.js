const apiUrl = "https://hacker-news.firebaseio.com/v0/";

export default async (req, res) => {
	let tempResponse = [];
	let errorMessage = "";
	try {
		const res = await fetch(`${apiUrl}topstories.json`);
		tempResponse = await res.json();
	} catch (error) {
		errorMessage = error.message;
	}
	res.json({ tempResponse });
};
