import React from 'react'
import  ReactDOM from 'react-dom/client'

const Course = ({title}) => (
    <h1>{title}</h1>
)

const Content = ({courseInfo}) => (
    <div>
        {courseInfo.map(info => (
            <p key={info.key}> {info.part} {info.exercises}</p>
        ))} 
    </div>
)

const Total = ({courseInfo}) => {
    let total = 0
    courseInfo.map(info =>{
        total+=info.exercises;
    })
    return(
        <p>Total exercises = {total}</p>
    )
    
}


const App = () => {
    const course = 'Half Stack application development'
   
    const courseInfo = [
        { key: 'Fundamentals', part: ' Fundamentals of React', exercises: 10 },
        { key: 'Props', part: ' Using props to pass data', exercises: 7 },
        { key: 'Component', part: ' State of a component', exercises: 14 }
    ]   
    return (
        <div>
            <Course title={course}/>
            <Content courseInfo={courseInfo}/>
            <Total courseInfo={courseInfo}/>
        </div>
    )
} 

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)