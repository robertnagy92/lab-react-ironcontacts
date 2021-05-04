import './App.css';
import React, {useState} from "react"
import data from "./contacts.json"


let listOfContacts = [];
data.map((element) => {
  if(listOfContacts.length < 5){
    listOfContacts.push(element)
  }
})

function App() {


const [actors, updateActors] = useState(listOfContacts)
 

  const addContact = () => {
    let randomIndex = Math.floor(Math.random() * data.length)
    let elem = data[randomIndex]

    updateActors([elem, ...actors])
  }

  const sortByAlphabet = () => {

    let listClone = JSON.parse(JSON.stringify(actors))

    listClone.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        }
        else if(a.name < b.name) {
            return -1
        }
        else {
            return 0
        }
    })
    updateActors(listClone)
    
  }

  const sortByPopularity = () => {

    const listClone = JSON.parse(JSON.stringify(actors))

    let sortedPop = listClone.sort((a, b) => b.popularity - a.popularity);

    updateActors(sortedPop)

  }

  return (
    <div >
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByAlphabet} style={{margin: "2rem"}}>Alphabetical order</button>
      <button onClick={sortByPopularity}>Popularity order</button>
      {
        actors.map((element,index)=>{
          return <ul key={index} style={{listStyleType: "none", margin: "1rem 1rem 1rem 20rem"}}>
                    <li><img src={element.pictureUrl} style={{width: "5rem"}}/></li>
                    <li>Name: {element.name}</li>
                    <li>Popularity: {element.popularity}</li>
                  </ul>
        })
      }
  </div>
  )
}

export default App;
