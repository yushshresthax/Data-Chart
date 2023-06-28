const url = 'https://sportscore1.p.rapidapi.com/players/1';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af0ff56796msh245c42a6090e163p115a7djsnb7aee9fbcf6b',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

const api = async()=>{
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

export default api