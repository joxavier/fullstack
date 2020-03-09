import React from 'react';
import ReactDOM from 'react-dom';
 
const Hello = (props) => {
    return(
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    ) 
}

const App = () => {
    console.log('hello form component')
    const now = new Date()
    const a = 10
    const b = 20
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <h1>{course}</h1>
            <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
            <h1>Greetings</h1>
            <Hello name="Josh" age={10}/>
            <Hello name="Xavier" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

