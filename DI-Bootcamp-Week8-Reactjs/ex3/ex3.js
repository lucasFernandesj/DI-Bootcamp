import logo from './logo.svg';
import './App.css';
import Header from './Header'
import userFavAnimals from './userFavAnimals';


function App() {
  const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };


  return (
    <div className="App">
      <header className="App-header">
        <div>{user.first_name}</div>
        <div>{user.last_name}</div>   
        
       {user.fav_animals.map((element , index)=>{
          return(
             <li key={index}>
               {element}
             </li> 
          )
        })}    
       
        
      </header>
    </div>
  );
}

export default App;