document.querySelector('.btn').addEventListener('click' , async()=>{
    displayLoading()
    let thisName = document.querySelector('#name').value 
    let currChar;
    try{
        const res = await fetch('https://www.swapi.tech/api/people/');
        if(res.status !==200){
            throw new Error('Something went wrong')
            console.log('Error Thrown')
        }
        const resFinal = await res.json();
        const arrChar = resFinal.results
        console.log(arrChar)
        arrChar.forEach(element => {
            if(element.name === thisName){
                
                currChar = element
                console.log(currChar)
            }
        });
        let div = document.createElement('div') 
        let p = document.createElement('p') 
        p.innerText = currChar.name;
        div.appendChild(p);
        document.querySelector('.container').appendChild(div)
        hideLoading()








    }catch(err){
        console.log(err)
        console.log('*****CATCHED*****')
    }
  

})



const displayLoading =()=>{
    document.querySelector('.loading').setAttribute('id' , '')

}

const hideLoading = ()=>{
    document.querySelector('.loading').setAttribute('id' , 'hidden')

}