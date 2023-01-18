import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import Feedbackitem from './Feedbackitem'
import FeedbackContext from '../Context/FeedbackContext'
import Spinner from './Shared/Spinner'

const FeedbackList = () => {
   const {feedback, isLoading } = useContext(FeedbackContext)


     if (!isLoading && (!feedback || feedback.lenght === 0)) {
          return <p>No Feedback Yet</p>
     }

      return isLoading ? <Spinner/> : (
          <div className='feedback-list'>
          <AnimatePresence/>
          {feedback.map((item) => (
               <motion.div 
               key={item.id}
               initial={{opacity: 0}}
               animate= {{opacity: 1}}
               exit={{opacity: 0}}
               >
               <Feedbackitem 
                
               item={item}
               // passing handle delete as a prop in feedback item
               
               />
               </motion.div>
          ))}
          </div>

      )
  
    




//     <div className='feedback-list'>
//      {feedback.map((item) => (
//           <Feedbackitem 
//           key={item.id} 
//           item={item}
//           // passing handle delete as a prop in feedback item
//           handleDelete={handleDelete}
//           />
//      ))}
//      </div>
  
}

export default FeedbackList