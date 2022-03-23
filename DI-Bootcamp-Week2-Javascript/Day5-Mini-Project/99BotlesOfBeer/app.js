var num = +prompt('Enter a number of bottles')
let subtracted = 1
let x = true
while(x){
    if(num-subtracted < 0){
        console.log('num < 0')
        console.log('0 bottle of beer on the wall')
        break;
    }
    
    if(subtracted === 1){
        num=num-1
        console.log(`${num} bottles of beer on the wall`)
        console.log(`Take ${subtracted} down , pass it arround , ${num-subtracted} bottles of beer`)
        num--
        subtracted++
    }else{
        console.log(`${num} bottles of beer on the wall`)
        console.log(
          `Take ${subtracted} down , pass them arround , ${
            num - subtracted
          } bottles of beer`
        )
        num--
        subtracted++
    }
    if(num-subtracted < 0){
        console.log('0 bottle of beer on the wall')
        x = false
    }
}