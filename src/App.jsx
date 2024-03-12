import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const film = {
  title: 'The Godfather',
  director: 'Francis Ford Coppola',
  year: 1972,
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

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
      <img src={viteLogo} alt="vite" width='100' />
      <button onClick={() => setCount(count + 1)}>button</button>
      <div>{count}</div>
      <br />
      <label htmlFor="search">Search :</label>
      <input id="search" type="text" />
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
      <hr />
      <div className='list-react'>
        <h1>LIST IN REACT</h1>
        <h4>JSX is a mix JS and html mixed together</h4>
        <label htmlFor='search'>Search:  </label>
        <input id='search' type='text' />

        <ul>
          {list.map(function (element) {
            return (

              <li key={element.objectID}>
                <span>
                  <a href={element.url}>{element.title}</a>
                </span>
                <span>{element.author}</span>
                <span>{element.num_comments}</span>
                <span>{element.points}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App; 
