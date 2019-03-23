import React from 'react'

import Course from './components/Course'
import Total from './components/Total'

const App = () => {
  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10,
          id: 1
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7,
          id: 2
        },
        {
          name: 'Komponenttien tila',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const showCourses = (courses) => {
    return courses.map(course => {
      return (
        <div key={course.id}>
          <Course course={course} />
          <Total parts={course.parts}/>
        </div>
      )
    })
  }

  return (
    <div>
      {showCourses(courses)}
    </div>
  )
}
export default App