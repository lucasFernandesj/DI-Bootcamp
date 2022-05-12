import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLink from "./NavLink";
import ErrorBoundaries2 from "./components/ErrorBoundaries2";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
    <NavLink />
          <Routes>
        
        <Route exact path='/' element={<Home/>}/>

     
          <Route path='/shop' element={ <ErrorBoundaries2> <Shop /> </ErrorBoundaries2>}/>
      


        <Route path='/about' element={<About />}/>

    
      </Routes>
       
    
     
    
       
      </>
    );
  }
}

export default App;
