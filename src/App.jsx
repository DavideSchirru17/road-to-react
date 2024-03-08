import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const film = {
  title: 'The Godfather',
  director: 'Francis Ford Coppola',
  year: 1972,
}

function App() {
  const title = 'Dio Merda';
  const [count, setCount] = useState(0);
  
 function welcome(title) {
    return title; 
  }

  return (
    <>
     <h1>Hello {title}</h1>
      <img src={reactLogo} alt="react" width="100" />
      <img src={viteLogo} alt="vite"  width='100'/>
     <button onClick={() => setCount(count + 1)}>button</button>
     <div>{count}</div>
     <br />
     <label htmlFor="search">Search :</label>
     <input id= "search" type="text" />
     <div>
      <ul>
        <h2>The features of this movie are</h2>
        <li> {film.title} </li>
        <li>{film.director}</li>
        <li>{film.year}</li>
      </ul>
     </div>
     <div>
      <h2>Passo una funzione</h2>
      <p>passo la fuunzione cosi <strong>{welcome('passo ciao')}</strong></p>
     </div>
    </>
  )
}

export default App; 
