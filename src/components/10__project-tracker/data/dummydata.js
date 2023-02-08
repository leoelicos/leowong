const projectTypes = ['Web Application (Front End)', 'Web Application (Back End)', 'Web Application (Full Stack)', 'Mobile Application', 'Print Campaign', 'Digital Marketing Campaign']

const getRandomChar = () => String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 26))
const getRandomString = (randomLength) =>
  new Array(randomLength)
    .fill(0)
    .map(() => getRandomChar())
    .join('')

const dummyData = new Array(10).fill(undefined).map(() => {
  let projectName = getRandomString(10)
  let projectType = projectTypes[Math.floor(Math.random() * projectTypes.length)]
  let hourlyRate = Math.floor(Math.random() * 100)
  let now = new Date()
  let daysUntilDueDate = Math.floor(Math.random() * 100)
  let dueDate = new Date(now.getTime() + daysUntilDueDate * 24 * 60 * 60 * 1000).toLocaleDateString()
  let potentialEarnings = 20 * hourlyRate
  return {
    key: projectName,
    projectName,
    projectType,
    hourlyRate: hourlyRate.toFixed(2),
    dueDate,
    daysUntilDueDate,
    potentialEarnings
  }
})
export default dummyData
