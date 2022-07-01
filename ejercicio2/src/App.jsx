import { useState } from 'react'


const Header = ({title}) => (
  <h1>{title}</h1>
)

const SubHeader = ({subTitle}) => (
  <h2>{subTitle}</h2>
)
const Statistics = ({stadistics}) => (
  <div>
    {stadistics.map(info => (
            <p key={info.key}> {info.Good}
            {info.Neutral}
            {info.Bad}</p>
        ))}
  </div>
)

const App = () => {
  const header = 'Give feedback'
  const subHeader = 'Statistics'
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);
  
  let toRender = (<p>{good} {neutral} {bad}</p>) 

  const statisticsInfo = [
    {key: good, Good: (setGood)},
    {key: neutral, Neutral:(setNeutral)},
    {key: bad, Bad:(setBad)}
  ]

  return(
    <div>
      <Header title={header}/>
      <button onClick={incrementGood} disabled={setGood >= 1000}> Good </button>
      <button onClick={incrementNeutral} disabled={setNeutral >= 1000}> Neutral </button>
      <button onClick={incrementBad} disabled={setBad >= 1000}> Bad </button>
      <SubHeader subTitle={subHeader}/>
      {toRender}
      <Statistics stadistics={statisticsInfo} />
    </div>
  )
}
export default App
