Getting Api Request using fake rest api with xmlhttprequest

const request = new XMLHttpRequest();

//use event listener to see status state is 4 then display

request.EventListener('readystatechange', () =>
	{
	if (request.readystate === 4)
		{
		console.log(request.responseText);
		}
	}
)

request.open('GET', 'API EndPoint');
request.send();

# promises
let us handle callback hell in an easier way, and have higher priority in the call back queue
const fetch = () => 
{
return new Promise();
resolve('resolved');
reject('reject');
}

use then the then method to resolve the promise

fetch().then((data) => {}).catch((err) => {})

we used the catch to handle rejected promises

# Fetch Api

Fetch Api returns a promise

fetching from an API endpoint using fetch API
fetch('apiendpoint-url').then((response) => {return response.json}).then((data) => console.log(data)).catch((err) => {....})

# Async Await
cleaner way of writing promise chainings 



