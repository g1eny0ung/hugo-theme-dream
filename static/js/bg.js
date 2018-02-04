// From https://uigradients.com
var dreamBGGradients = [
  [],
  ['#40e0d0', '#ff8c00', '#ff0080'], // Wedding Day Blues
  ['#3e5151', '#decba4'], // Sand to Blue
  ['#11998e', '#38ef7d'], // Quepal
  ['#108dc7', '#ef8e38'], // Pun Yeta
  ['#fc5c7d', '#6a82fb'], // Sublime Light
  ['#fc466b', '#3f5efb'], // Sublime Vivid
  ['#c94b4b', '#4b134f'], // Bighead
  ['#23074d', '#cc5333'], // Taran Tado
]

var dreamBody = $('body')
var dreamFront = $('.flip-container .front')
var dreamBack = $('.flip-container .back')

var dreamPrevBgIndex = 0
var dreamBodyBgSwitch = []
var dreamBodyBgSwitchIndex = 0

var dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
dreamBodyBgSwitch.push(dreamBg)
setBackground(dreamFront, dreamBg)

setBackground(dreamBody, dreamBg)

dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
dreamBodyBgSwitch.push(dreamBg)
setBackground(dreamBack, dreamBg)

function connect(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      str += arr[i] + ', '
    } else {
      str += arr[i]
    }
  }
  return str
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  var random
  while (1) {
    random = Math.floor(Math.random() * (max - min)) + min
    if (random !== dreamPrevBgIndex) {
      dreamPrevBgIndex = random
      break
    }
  }
  return random
}

function setBackground(target, gradient) {
  target.css({
    background: gradient[0]
  })
  target.css({
    background: 'linear-gradient(to right, ' + connect(gradient) + ')'
  })
}
