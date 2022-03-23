var btns = document.getElementsByClassName('btn')
var display = ''
for (var i = 0; i < btns.length; i++) {
  let curr = btns[i]
  curr.addEventListener('click', () => {
    let currText = curr.innerText
    if (currText === 'CLEAR' || currText === 'RESET') {
      display = ''
      document.querySelector('.display').innerText = display
      return
    }
    if (currText === '=') {
      let res = eval(display)

      document.querySelector('.display').innerText = res
      display = res
      return
    }
    display += currText
    document.querySelector('.display').innerText = display
  })
}
