let url = window.location.search
console.log('hello')
const urlParams = new URLSearchParams(url)
console.log(urlParams.get("name"))

document.write(urlParams.get('name'))
document.write(urlParams.get('lastName'))