// Information to reach API


// Some page elements
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const rebrandly = (urlToShorten, querySelected) => {
  const data = JSON.stringify({destination: urlToShorten})
  const apiKey = '4306eee9c03c41a7af8428f38e074059';
  const url = 'https://api.rebrandly.com/v1/links';
  const shortenInputToUpdate = document.querySelector(querySelected);

fetch(url, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'apikey': apiKey
  },
  body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then((jsonResponse) => {
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  rebrandly();
}

// shortenButton.addEventListener('click', displayShortUrl);

export default rebrandly;
