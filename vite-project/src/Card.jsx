import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div>
        <div className='card'>
       <h3 >{props.head}</h3>
      <p>{props.para}</p>

        </div>
    </div>
  )
}

export default Card