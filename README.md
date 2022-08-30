# name-search-react
- I had some issues getting MongoDB working on my old Windows machine. 

- If there are any issues running the backend (server.js), there is some mock data you can call from an api (https://jsonplaceholder.typicode.com/users) , or from a json file directly in the project (mock-data.json)

## Current Functionality:
- Directions: After cloning the project, `npm install` , and `npm run dev` to start the frontend, `npm run start` for the backend
- Autocompletion based on search string

## Future Work: 
- This solution is more client based, given more time I would have liked to build out a better search functionality querying MongoDB w/ the search strings. 
- I got sidetracked trying to use a new library: react-query, for error handling and communicating with the api backend. I ran into some issues with the error handling that I would've liked to figure out given more time
- I also spent some time getting auto complete working instead of using a submit button. Ideally I would have liked to have been able to combine classic form submission on button click along with autocomplete, and an autofilling feature. 

