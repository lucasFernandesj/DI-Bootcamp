let color = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow']
let ordinal = ['th', 'st', 'nd', 'rd']


function display(){
    for(var i = o ; i < color.length; i++){
        if(i > 3){
            console.log(`${i}${ordinal[0]} color is ${color[i]}`)
        }else{
            console.log(`${i}${ordinal[i]} color is ${color[i]}`)
        }
    }
}
display()