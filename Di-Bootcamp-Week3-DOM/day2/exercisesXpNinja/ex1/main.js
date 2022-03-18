

document.querySelector('#totalTip').getElementsByClassName.display='none';
document.querySelector('#calculate').addEventListener('click' , calculateTip() )

function calculateTip(){
    var billAmount = Number(document.querySelector('#billAmt').value)
    var serviceQuality = Number(document.querySelector('#serviceQual').value)
    var numberOfPeople = Number(document.querySelector('#numOfPeople').value) 
    
    if(serviceQuality===0 || billAmount === null){
        alert('Check the service and Bill Amount and try again')
        return
    }
    if(numberOfPeople.length===0){
        numberOfPeople = 1
        document.querySelector('#each').getElementsByClassName.display='none'

    }
    let total = (( billAmount * serviceQuality ) / numberOfPeople).toFixed(2)
    document.querySelector('#totalTip').getElementsByClassName.display='block';
    document.querySelector('#tip').innerText = total 


}

