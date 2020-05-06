const url = 'https://itunes.apple.com/search?term=beyonce';
fetch(url)
.then( (response) => response.json() )
.then( (data) => console.log(data.results) )

.catch(error => console.log('Request failed: ', error))
