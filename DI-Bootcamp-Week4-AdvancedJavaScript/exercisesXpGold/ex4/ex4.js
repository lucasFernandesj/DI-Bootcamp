
function repeat(times){
    var str ='' 
    if(times < 0){
        return ''
    }
    else{
        while(times>0){
            str+='Ha!'
            times--
        }

    }
    return str
}

console.log(repeat(3))