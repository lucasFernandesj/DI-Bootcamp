 let h1 = document.getElementsByTagName("h1")[0];
console.log(h1.innerText)

let article = document.getElementsByTagName('article')[0]
let children = article.children
let last = children[children.length -1]
article.removeChild(last)

let firstH2 = document.getElementsByTagName('h2')[0]
firstH2.addEventListener('click' ,()=>{
    firstH2.style.backgroundColor='red'
})
let firstH3 = document.getElementsByTagName('h3')[0]
firstH3.addEventListener( 'click' , ()=>{
    firstH3.style.display='none'
} )

let btn = document.createElement('button') 
btn.innerText = 'Make all paragraphs invisible'
document.body.appendChild(btn) 
btn.addEventListener('click' , ()=>{
    let ps = document.getElementsByTagName('p')
    for(const p of ps){
        p.style.display='none'
    }
    });
   


h1.addEventListener('mouseover' , ()=>{
    let randomNum=Math.floor(Math.random()*100) 
    h1.style.fontSize = `${randomNum}px`
    
})
