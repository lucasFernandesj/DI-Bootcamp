let colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow']
colors.forEach((element, index) => {
  console.log(`${index + 1}# is ${element}`)
})

(colors.some('Violet'))
  ? console.log('Yeah')
  : console.log('No...')

  