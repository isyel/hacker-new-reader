const apiUrl = "https://hacker-news.firebaseio.com/v0/";

export default async ({ query: { id } }, res) => {
	let storyResponse = {};
	let errorMessage = "";
	try {
		const story = await fetch(`${apiUrl}item/${id}.json`);
		storyResponse = await story.json();
	} catch (error) {
		errorMessage = error.message;
		console.log("errorMessage: ", errorMessage);
	}
	res.json(storyResponse);
};
