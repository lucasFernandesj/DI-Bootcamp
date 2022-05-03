
function calculate(){
  today=new Date();
var target=new Date(today.getFullYear(), 01, 01);
if (today.getMonth()==01 && today.getDate()>01) 
{
target.setFullYear(target.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((target.getTime()-today.getTime())/(one_day))+
" days left until January 1st!");  
}

module.exports = calculate
