import React from 'react'
import  ReactDOM from 'react-dom/client'

const Course = (props) => (
    <div>
        <h1>{props.course}</h1>
    </div>
)




const App = () => (
   <div>
        <Course course = 'Half Stack application development' />
   </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)