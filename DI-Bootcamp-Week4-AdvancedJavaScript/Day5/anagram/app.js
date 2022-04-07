function isAnagram(string1 , string2){
    let isAnagram ;
    let arr1 = string1.split('').filter((element)=>element !== ' ')
    let arr2 = string2.split('').filter((element) => element !== ' ')

   if(arr1.length === arr2.length){

    arr1.forEach((element)=>{
        if(arr2.indexOf(element)!== -1){
            isAnagram = true
        }else{
            isAnagram = false
        }
    })


      
   }else{
       isAnagram = false
   }
console.log(isAnagram)
return isAnagram 
}

isAnagram('brazil' , 'brilaz')