import { v4 as uuidv4 } from 'uuid'
import {createContext, useState} from 'react'



const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

     const [feedback, setFeedback] = useState([
          {
               id: 1,
               text: 'This item is from context',
               rating: 10,
          },
          {
               id: 2,
               text: 'This item is from context',
               rating: 9,
          },
          {
               id: 3,
               text: 'This item is from context',
               rating: 5,
          },
     ])

     const [feedbackEdit, setFeedbackEdit] = useState({
          item: {},
          edit: false,
     })
       // Add feedback
     const addFeedback = (newFeedback) => {
          newFeedback.id = uuidv4();
          setFeedback([newFeedback, ...feedback]) // making a copy of the old feedback adding new feedback
       
      }
 
     // Delete feedback
     const deleteFeedback = (id) => {
          if(window.confirm('Are you sure you want to delete')){

               setFeedback(feedback.filter((item) => item.id !== id));
          }
     }

     //update feedback item
     const updateFeedback = (id, updateItem) => {
           setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updateItem} : item))
     }
     
     // set item to be updeted
     const editFeedback = (item) => {
          setFeedbackEdit({
               item,
               edit: true
          })
     }
    
     return (
     <FeedbackContext.Provider value={{
             feedback,
             feedbackEdit,
             deleteFeedback,
             addFeedback,
             editFeedback,
             updateFeedback,
     }}
     >
     {children}
     </FeedbackContext.Provider>
     )
}

export default FeedbackContext;