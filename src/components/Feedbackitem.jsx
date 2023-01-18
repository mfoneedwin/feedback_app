import React from 'react'
import { useContext } from 'react'
import Card from './Shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../Context/FeedbackContext'



const Feedbackitem = ({item, }) => {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)


  return (
    <Card  >
     <div className="num-display">{item.rating}</div>
      {/* we catching the handle delete from feedback item and passing it to the button */}
     <button  onClick={() => deleteFeedback(item.id)} className='close'> 
          <FaTimes color='purple'/>
          
     </button>
       <button  onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple'/>
       </button>
     <div className="text-display">{item.text}</div>
     
    </Card>
  )
}

export default Feedbackitem