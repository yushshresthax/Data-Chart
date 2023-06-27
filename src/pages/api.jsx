
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
  headers: {
    'X-RapidAPI-Key': 'af0ff56796msh245c42a6090e163p115a7djsnb7aee9fbcf6b',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};
const api = async()=> {
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}
export default api