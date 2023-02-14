const Graph = ({ array, w }) => {
  console.log('Graph', { array, w })
  if (w === 0) return null

  var xIncrement = +w / 25
  var baseline = 12
  var heightOfGraph = baseline + 5
  var heightOfText = heightOfGraph + 5

  console.log('1', array)
  var ymax = Math.max(...array)
  console.log('2', Math.max(...array))

  var ymin = Math.min(...array)
  console.log({ ymax, ymin })
  const heightOfMaxLabel = 48
  const heightOfMinLabel = 0
  var h = 80

  /* scale the vertical so the highest becomes is 48 and the lowest becomes 0 */
  const scale = (num) => Math.floor(((num - ymin) * (heightOfMaxLabel - heightOfMinLabel)) / (ymax - ymin) + heightOfMinLabel)

  var startLabel = w < 968 ? 1 : w < 576 ? 2 : 0
  var increment = w < 968 ? 2 : w < 576 ? 4 : 1

  // DATA LABELS
  const DataLabels = () => {
    const dataLabels = []
    for (var i = startLabel; i < 24; i += increment) {
      dataLabels.push(
        <text
          key={i}
          x={parseInt(xIncrement * (i + 1))}
          y={h - scale(+array[i]) - heightOfText}>
          {array[i].toString()}
        </text>
      )
    }
    return (
      <g
        textAnchor='middle'
        fill='#fff'>
        {dataLabels}
      </g>
    )
  }

  // GRAPH FILL
  const GraphFill = () => {
    var graphFill = []

    // top left corner
    graphFill.push(` M 0 ${h - scale(+array[0]) - heightOfGraph}`)

    // data points
    for (var i = startLabel; i < 24; i += increment) {
      const x = parseInt((i + 1) * xIncrement)
      const y = h - scale(+array[i]) - heightOfGraph
      graphFill.push(` L ${x} ${y}`)
    }
    // top right corner
    graphFill.push(`L ${w - 1} ${h - scale(+array[23]) - heightOfGraph}`)

    // bottom right
    graphFill.push(`L ${w - 1} ${h - baseline}`)

    // bottom left
    graphFill.push(`L 0 ${h - baseline}`)

    // close path
    graphFill.push(` Z`)

    // space-delimited string
    graphFill = graphFill.join(' ')
    return (
      <path
        d={graphFill}
        fill='url(#temperatureGradient)'
      />
    )
  }

  // GRAPH LINE
  const GraphLine = () => {
    var graphLine = []

    // top left corner
    graphLine.push(` M 0 ${h - scale(+array[0]) - heightOfGraph}`)

    // data points
    for (var i = startLabel; i < 24; i += increment) {
      const x = parseInt((i + 1) * xIncrement)
      const y = h - scale(+array[i]) - heightOfGraph
      graphLine.push(` L ${x} ${y}`)
    }

    // top right corner
    graphLine.push(`L ${w} ${h - scale(+array[23]) - heightOfGraph}`)

    // close path
    graphLine = graphLine.join(' ')
    return (
      <path
        d={graphLine}
        stroke='#513d6e'
        strokeWidth='2'
        fill='none'
      />
    )
  }

  // TICKS
  const Ticks = () => {
    var tickHeight = 2
    const ticks = []
    for (var i = startLabel; i < 24; i += increment) {
      ticks.push(
        <text
          key={i}
          x={parseInt(xIncrement * (i + 1))}
          y={h - tickHeight - 2}>
          {`${i} ${i < 12 ? 'am' : 'pm'}`}
        </text>
      )
    }
    return (
      <g
        textAnchor='middle'
        fill='#fff'>
        {ticks}
      </g>
    )
  }

  return (
    <svg
      id='svg1'
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height='80'>
      <defs>
        <linearGradient
          id='temperatureGradient'
          x1='0'
          x2='0'
          y1='0'
          y2='1'>
          <stop
            offset='0%'
            stopColor='white'
          />
          <stop
            offset='50%'
            stopColor='white'
            stopOpacity='1'
          />
          <stop
            offset='100%'
            stopColor='white'
            stopOpacity='0'
          />
        </linearGradient>
      </defs>
      <DataLabels />
      <GraphFill />
      <GraphLine />
      <Ticks />
    </svg>
  )
}
export default Graph
