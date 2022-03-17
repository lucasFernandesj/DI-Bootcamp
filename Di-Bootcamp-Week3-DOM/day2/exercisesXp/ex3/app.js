var allBoldItems;

const getBold_items = () => {
    var bold = document.getElementsByTagName('strong') 
    allBoldItems = bold 
}

const highlight = () =>{
    allBoldItems.forEach(element => {
        element.style.color='blue'
    });

}

const return_normal = () =>{
     allBoldItems.forEach(element => {
        element.style.color='black'
    });
} 
let firstP = document.getElementsByTagName('p')[0]
firstP.addEventListener('onmouseover' , highlight );
firstP.addEventListener('onmouseout' , return_normal);

