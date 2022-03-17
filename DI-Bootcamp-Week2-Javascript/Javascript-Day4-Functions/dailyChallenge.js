let str = prompt('Enter a sentence separated by comas').split(',')
let longest=''
let design=''
let row=''
let spaces=''
let firstRow=''
let frame=''
str.forEach(str =>{
    if(longest.length < str.length){
        longest=str
    }
})

for(let i = 0 ; i < longest.length + 4; i++){
firstRow+='*'

}
for(var i=0;i<str.length;i++){
    if(str[i].length <= longest.length){
        for(var j = 0 ; j< longest.length - str[i].length;j++){
            spaces+=' '
        }
        row+='* '+str[i] + spaces+' *' +'\n'
        spaces=''
    }
}

frame+=firstRow +'\n'+row+firstRow 

console.log(frame)