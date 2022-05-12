
class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
  
     sendData= async()=>{
       let data={
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
       }
      try{
        await fetch('https://webhook.site/4f378ec5-246f-4c7c-a548-1b77c09f20a8',{
          method: 'POST', 
          mode: 'no-cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
            
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
          body: JSON.stringify(data)
        });
        
      }
      catch(err){
        console.log(err)
      }
     }
     
   
    render() {
      
      return (
        <>
      <button onClick={this.sendData}>Click</button>
        </>
      );
    }
  }
  
  export default App;
  