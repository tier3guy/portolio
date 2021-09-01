import React from 'react'

function Course() {
  return (
    <div id = "academics">
      <h1>Courses</h1>
      <div className = "lists">
        <ul>
          <li>
            <p><span>Python</span></p>
            <p>Coursera</p>
            {/*<p>Passed in 2020 with an aggregate of 85% (PCM)</p>*/}
          </li>
          <li>
            <p><span>Data-Structures & Algorithms</span></p>
            <p>Abdul Bari @Udmey</p>
            {/*<p>Passed in 2020 with an aggregate of 85% (PCM)</p>*/}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Course
