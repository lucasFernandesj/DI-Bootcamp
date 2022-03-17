//EX1
function isBlanc(str){
    if(typeof(str) !== string){
        console.log('Not a string')
    }
    if(str.length === 0 ){
        return true
    }else if(str.length>0){
        return false
    }
}
//EX2
function abreviate(str){
    var arrStr = str.split(' ')
    var lastInitial = arrStr[i].charAt(0)
    var abreviated = arrStr[0]+' '+lastInitial 
    return abreviated
}
//EX3
function swapCase(str){
    var arrStr = str.split('')
    for(var i = 0 ; i < arrStr.length ; i++){
        if(arrStr[i] === arrStr[i].toUpperCase ){
            arrStr[i] = arrStr[i].toLowerCase
        }else if(arrStr[i] === arrStr[i].toLowerCase){
            arrStr[i] = arrStr[i].toUpperCase
        }

    }
    var newStr = arrStr.join()
    return newStr
}

//EX 4
let nums=[[3, 4],
          [8, 3, 2],
          [3],
          [9, 3],
          [5, 3],
          [4, 3]
]
function omnipresent(nums){
    var present ={}
    for(var i = 0 ; i < nums.length ; i++){
        for(var j = 0 ; j < nums[i].length; j++){
            var current =nums[i][j] 
            var count=present[current]
            present[current] = (count) ? count + 1 : 1
        }

    }
  
    for(key in present){
        if(present[key] === nums.length){
            return (`${key} is present in all of the sub arrays`)
        }
    }
}
console.log(omnipresent(nums))

