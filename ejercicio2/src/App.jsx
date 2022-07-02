import { useState } from 'react'

const Header = ({title}) => (
  <h1>{title}</h1>
)

const SubHeader = ({subTitle}) => (
  <h2>{subTitle}</h2>
)
const Statistics = (props) => {
  const {good, neutral, bad} = props
  const total = good + neutral + bad 
  const score = good - bad
  const average = score / total | 0
  const positive = good / total * 100 | 0

  return(
    <div>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}

const App = () => {
  const header = 'Give feedback'
  const subHeader = 'Statistics'
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  return(
    <div>
      <Header title={header}/>
      <button onClick={incrementGood} disabled={setGood >= 1000}> Good </button>
      <button onClick={incrementNeutral} disabled={setNeutral >= 1000}> Neutral </button>
      <button onClick={incrementBad} disabled={setBad >= 1000}> Bad </button>
      <SubHeader subTitle={subHeader}/>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      />
    </div>
  )
}
export default App
