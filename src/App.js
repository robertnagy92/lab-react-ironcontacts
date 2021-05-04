import './App.css';
import data from "./contacts.json"

function App() {

  let listOfContacts = [];
  for(let i=1; i<=5; i++){
    listOfContacts.push(data[i])
  }

  return (
   <table>
     <thead>
       <tr>
         <th>Picture</th>
         <th>Name</th>
         <th>Popularity</th>
       </tr>
     </thead>
     <tbody>
       {listOfContacts.map(c => {
         return (
           <tr>
             <td><img src={c.pictureUrl} style={{height: "10rem"}}></img></td>
             <td><h3>{c.name}</h3></td>
             <td><h4>{c.popularity}</h4></td>
           </tr>
         )
       })}
     </tbody>
   </table>
  );
}

export default App;
