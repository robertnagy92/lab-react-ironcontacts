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

  return (
    <div >
      <button onClick={addContact} style={{margin: "2rem"}}>Add Random Contact</button>
      {
        actors.map((element,index)=>{
          return <ul key={index} style={{listStyleType: "none", margin: "5rem 5rem 5rem 20rem"}}>
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
