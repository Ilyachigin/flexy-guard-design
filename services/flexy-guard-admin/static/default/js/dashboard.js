function createChart() {
  const data = [3244, 3781, 2698, 3179]
  const percentages = data.map((value) => (value / Math.max(...data)) * 100)
  const bars = document.querySelectorAll('.bars-bar')
  const labels = document.querySelectorAll('.bars-label')
  labels.forEach((label, index) => {
    label.innerHTML = `${data[index]} visits`
  })
  bars.forEach((bar, index) => {
    bar.style.height = `${percentages[index]}%`
  })
}

createChart()

function createGraph() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  document.querySelector('.canvas-x-labels').innerHTML = labels
    .map((label) => `<div class="canvas-x-label">${label}</div>`)
    .join('')

  const values = [160, 260, 153, 112, 148, 560]
  const canvasHeight = 236

  var c = document.getElementById('myCanvas')
  var ctx = c.getContext('2d')

  var maxValue = Math.max(...values)
  var scalingFactor = canvasHeight / (maxValue * 1.2)

  c.width = c.parentElement.clientWidth
  c.height = canvasHeight

  ctx.clearRect(0, 0, c.width, c.height)

  ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'
  for (var i = 1; i <= 5; i++) {
    var lineY = canvasHeight - (canvasHeight / 5) * i
    ctx.beginPath()
    ctx.moveTo(0, lineY)
    ctx.lineTo(c.width, lineY)
    ctx.stroke()
  }

  ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'
  for (var i = 0; i < values.length; i++) {
    var lineX = (c.width / (values.length - 1)) * i
    ctx.beginPath()
    ctx.moveTo(lineX, 0)
    ctx.lineTo(lineX, canvasHeight)
    ctx.stroke()
  }

  ctx.strokeStyle = '#7257CB'
  ctx.lineWidth = 2

  ctx.beginPath()
  ctx.moveTo(0, canvasHeight - values[0] * scalingFactor)

  for (var i = 1; i < values.length; i++) {
    var x = (c.width / (values.length - 1)) * i
    var y = canvasHeight - values[i] * scalingFactor
    ctx.lineTo(x, y)
  }

  ctx.lineTo(c.width, canvasHeight)
  ctx.lineTo(0, canvasHeight)
  ctx.closePath()

  ctx.fillStyle = 'rgba(152, 129, 230, 0.5)'
  ctx.fill()

  ctx.stroke()

  let yLabels = [0]
  maxValue = Math.ceil(maxValue / 100) * 100

  for (let i = 1; i <= 5; i++) {
    yLabels.push((maxValue / 5) * i)
  }

  document.querySelector('.canvas-y-labels').innerHTML = yLabels
    .map((label) => `<div class="canvas-y-label">${label}</div>`)
    .join('')
}

createGraph()

function createCircle() {
  const data = [11372, 2564]
  const total = data.reduce((a, b) => a + b, 0)

  const style = `
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background: 
      radial-gradient(closest-side, #FEFEFE 60%, transparent 60% 100%),
      conic-gradient(#6145C0 ${(data[0] / total) * 100}%, #9881E6 0)
  `
  document.querySelector('.progress-bar').style = style
  document.querySelectorAll('.value-number').forEach((el, index) => {
    el.innerHTML = `${data[index]} &nbsp;`
  })
}

createCircle()

function createResourceLines() {
  const data = [74.2, 28.8, 54.7]
  document.querySelectorAll('.res-data').forEach((el, index) => {
    el.innerHTML = `${data[index]}%`
  })
  document.querySelectorAll('.progress-line').forEach((line, index) => {
    line.style = `
      height: 12px;
      width: 100%;
      border-radius: 6px;
      background: 
        linear-gradient(to right, #6145C0 ${
          (data[index] / 100) * 100
        }%, #9881E6 0),
        conic-gradient(#6145C0 ${(data[index] / 100) * 100}%, #9881E6 0);
    `
  })
}

createResourceLines()

function createPie() {
  const data = [65.4, 12.1, 8.9, 13.6]
  const total = data.reduce((a, b) => a + b, 0)
  const percentages = data.map((value) => (value / total) * 100)
  const pie = document.querySelector('.progress-pie')
  const pieStyle = `
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background: conic-gradient(
      #583BB9 0% ${percentages[0]}%,
      #7257CB ${percentages[0]}% ${percentages[0] + percentages[1]}%,
      #9881E6 ${percentages[0] + percentages[1]}% ${
    percentages[0] + percentages[1] + percentages[2]
  }%,
      #D5CDF0 ${percentages[0] + percentages[1] + percentages[2]}% ${
    percentages[0] + percentages[1] + percentages[2] + percentages[3]
  }%,
      transparent ${
        percentages[0] + percentages[1] + percentages[2] + percentages[3]
      }% 100%
    );
  `

  pie.style = pieStyle
}

createPie()
