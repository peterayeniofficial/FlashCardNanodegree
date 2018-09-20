export const getRandomColor = () => {
  const colorValues = [
    '#292477',
    '#757575',
    '#b71845',
    '#f26f28',
    '#4e4cb8',
    '#7c53c3',
    '#b93fb3',
    '#666804',
  ]
  return colorValues[Math.floor(Math.random() * colorValues.length)]
}

export const randomColor = (color = 'green') => {
  const randColor = getRandomColor()
  if (randColor === color) {
    return randomColor()
  }
  return randColor
}
