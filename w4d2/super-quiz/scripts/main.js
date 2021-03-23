const flipCatMatrix = (event) => {
  if (event.target.src === "http://localhost:5000/images/intro2.gif") {
    event.target.src = "http://localhost:5000/images/intro.gif"
  } else {
    event.target.src = "http://localhost:5000/images/intro2.gif"
  }
}

const insertImage = () => {
  const newImage = document.createElement('img')
  newImage.src = "/images/intro2.gif"
  document.querySelector('.result').innerHTML = ""
  document.querySelector('.result').appendChild(newImage)
}

const insertSpecificImage = (event) => {
  const elementId = event.target.id
  let path = ""
  if (elementId === "yes") {
    path = "/images/yesbutno1.webp"
  }
  if (elementId === "no") {
    path = "/images/yesbutno2.gif"
  }
  if (elementId === "depends") {
    path = "/images/genius.webp"
  }

  if (path) {
    const newImage = document.createElement('img')
    newImage.src = path
    document.querySelector('.result').innerHTML = ""
    document.querySelector('.result').appendChild(newImage)
  }
}

const insertSpecificImageJQ = (event) => {
  const elementId = event.target.id
  let path = ""
  if (elementId === "yes") {
    path = "/images/yesbutno1.webp"
  }
  if (elementId === "no") {
    path = "/images/yesbutno2.gif"
  }
  if (elementId === "depends") {
    path = "/images/genius.webp"
  }

  if (path) {
    const newImage = $('<img>')
    newImage.attr('src', path)
    $('.result').html('')
    $('.result').append(newImage)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const headerImage = document.querySelector('header img')
  headerImage.addEventListener('click', flipCatMatrix)

  document.addEventListener('click', insertSpecificImage)

  for (const button of document.querySelectorAll('.answer button')) {
    button.addEventListener('click', insertSpecificImage)
  }

  document.addEventListener('click', event => console.log(`Clicked on event.target`, event.target))
})

$(document).ready(() => {
  const littleChicken = 0
  $('header img').on('click', flipCatMatrix)
  $(document).on('click', event => console.log(`Clicked on event.target`, event.target))
  $('.answer button').click(insertSpecificImageJQ)
})