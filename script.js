async function populate() {
  // declare the requestURL variable to store the GitHub URL
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  // use the URL to initialize a new Request object
  const request = new Request(requestURL);

  // make the network request using the fetch() function, and this returns a Response object
  const response = await fetch(request);
  
  // retrieve the response as JSON using the json() function of the Response object
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}