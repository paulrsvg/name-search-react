import { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Data from './assets/mock-data.json'
import './App.css'


function App() {
  const [query, setQuery] = useState("")
  const [APIData, setAPIData] = useState([])

  useEffect(() => {
    //axios.get(`https://localhost:3000/users`) replace w/ mongo db address or smth
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setAPIData(response.data);
      })
  })

  // const fetchResults = async () => {
 
  //   // const res = await fetch("http://localhost:3000/users");
  //   return axios.get("https://jsonplaceholder.typicode.com/users")
  //   // return res.json();
  // };

  //using the react query hook
  // const { data, error, isError, isLoading, refetch } = useQuery("users", fetchResults, {
  //   // enabled: false, //disabled query from running automatically on component mount
  // });

  const searchNames = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
    APIData.filter((user) =>{
      if (query === '') {}
      if (user.name.toLowerCase().includes(query.toLowerCase())) {return user}
    }) 
    
  }

  const filterResults = (APIData, query) => {
    if (!query) {
      return users
    }
            if (query === '') {return ''} //leave blank when query string is empty
            else if (user.name.toLowerCase().includes(query.toLowerCase())) {
              return <p key = {user.id}>{user.name} is in {user.location}</p>
            }
            else{ return <p>name not found</p>}
  }

  // if (isLoading) return <h2>Loading data...</h2>;
  // if (isError) return <h2>Error fetching data: {error.message}</h2>

  return (
    <div className="App">
      
      <h1>User Search</h1>
      <div className="card">

        <input 
          placeholder="Enter a Name" 
          // onChange = { (e) => searchNames(e)}
          onChange={e => setQuery(e.target.value)}
          >
        </input>
        {/* <button>Search</button> */}

        {/* {isLoading && <p>Loading data..</p>}
      {error && <p>Error occurred: : {error.message}</p>} */}
        
      {
        Data.filter(user => { //change APIData to Data to use mock data instead of api backend
          if (query === '') {} //leave blank on 1st 
          else if (user.name.toLowerCase().includes(query.toLowerCase())) {return user}
          // else{ return <p>name not found</p>}
        }).map((user) => (
          // <p key = {user.id}>{user.name} is in {user.address.city}</p> to test w/ external api
          <p key = {user.id}>{user.name} is in {user.location}</p>
        ))
      }
        
        
      </div>
    </div>
  )
}

export default App
