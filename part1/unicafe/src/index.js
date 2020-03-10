import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = ({ good, neutral, bad, total }) => {
    if (total == 0) {
        return (
            <div>No Feedback given</div>
        )
    }

    return (
        <div>
            <Content type="good" count={good} />
            <Content type="neutral" count={neutral} />
            <Content type="bad" count={bad} />
            <Content type="all" count={total} />
            <Content type="average" count={(good - bad) / total} />
            <Content type="postive" count={(good / total) * 100 + " %"} />
        </div>
    )
}

const Content = ({ type, count }) => <div>{type} {count}</div>

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const total = good + neutral + bad;

    const handleGoodClick = () => { setGood(good + 1) }
    const handleNeutralClick = () => { setNeutral(neutral + 1) }
    const handleBadClick = () => { setBad(bad + 1) }

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral</button>
            <button onClick={handleBadClick}>bad</button>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)