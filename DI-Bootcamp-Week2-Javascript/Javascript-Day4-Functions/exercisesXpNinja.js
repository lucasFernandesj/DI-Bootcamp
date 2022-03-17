//Ex1
// var num = Math.round((Math.random()*100)) 
// for(var i = 0 ; i < num ; i++){
//     if (i%2 === 0){
//         console.log(i)
//     }
// }
//EX2

// function capitalize(str){
//     var res =[];
//     var arrStr=str.split('')
//     var arrStr2=str.split('')
//     for(var i = 0 ; i < arrStr.length; i++){
//         if(i%2===0){
            
//             arrStr[i] = arrStr[i].toUpperCase()
//         }
//         if(i%2!==0){
//             arrStr2[i] = arrStr2[i].toUpperCase()
//         }
       
// }
// var newStr1 = arrStr.join()
// var newStr2 = arrStr2.join()
// res.push(newStr1 , newStr2)
// return res
// }

//EX3
function palindrome(str){
    var reverse = str.split('').reverse().join()
    if(str === reverse){
        console.log('palindrome')
    }else{
        console.log('Not palindrome')
    }
}

//EX4

function biggest(arr){
    var max = -Infinity
    for(var i = 0 ; i < arr.length ; i++){
        if(arr.length === 0){
            max = 0
        }
        if(isNaN(arr[i])) continue 
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

//EX 5
function unique(arr){
    var unique=[];
    for(var i = 0 ; i < arr.length ; i++){
        if(unique.indexOf(arr[i])!== -1 ){
            unique.push(arr[i])
        }
    }
    return unique
}