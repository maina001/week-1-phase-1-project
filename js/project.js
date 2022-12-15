const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c88a5d3d93msh18f0346dc48d160p174961jsnf6baeff14d17',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};

fetch('https://car-data.p.rapidapi.com/cars/types', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));