//EX1
var lang = promot('What answer do you speak?')
var lang = lang.toLowerCase()
var greeting;

switch(lang){
case 'french':
    greeting='Bonjour';
    break;

case 'english':
    greeting="Hello";
    break;

case 'hebrew':
    greeting='Shalom';
    break;

default:
    greeting = '01110011 01101111 01110010 01110010 01111001'


}
alert(greeting)


//EX2

var grade =+prompt('Enter your grade')
if(grade>90){
    console.log('A')
}if(grade>80){
    console.log('B')
}if(grade>70){
    console.log('C')
}else{
    console.log('D')
}

//EX3
var verb = prompt('Enter a verb')
if(verb.length >= 3 || verb.substring(-3) !== 'ing'){
    verb+='ing'
}
if(verb.length>=3 ||  verb.substring(-3) === 'ing'){
    verb+='ly'
}
console.log(verb)