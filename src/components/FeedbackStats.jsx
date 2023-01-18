import React from 'react'
import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'

const FeedbackStats = () => {

  const {feedback} = useContext(FeedbackContext)
  // calculate rating avg

  let average = feedback.reduce((acc, cur) => {
             return acc + cur.rating
  }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
    <h4>{FeedbackStats.length} Reviews</h4>
    <h4>Avarage Rating: {isNaN(average) ? 0 : average } </h4>
    </div>
  )
}

export default FeedbackStats