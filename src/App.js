import React, { useState, useEffect} from 'react';
import './App.css';
import Person from './components/Person';

export default function App() {
  const [people, setPeople] = useState([])

  useEffect( () => {
    console.log("mounted")
    fetch("https://randomuser.me/api?results=25")
    .then( (response) => response.json())
    .then( (data) => {
      setPeople([data.results])
    })
  }, [])

  useEffect(() => {
    console.log("updated", people)
  }, [people])

  return (
    <div className="App">
      <ul className='peoples'>
        {people.map((human) => {
          return <Person data = {human} />
        })}
        
      </ul>
    </div>
  );
}

