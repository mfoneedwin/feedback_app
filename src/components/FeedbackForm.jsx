import React, {useState} from 'react'
import { useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Button from './Shared/Button';
import Card from './Shared/Card'
import FeedbackContext from '../Context/FeedbackContext';


const FeedbackForm = () => {

   const [text, setText] = useState('');
   const [rating, setRating] = useState('');
   const [btnDisabled, setBtnDisabled] = useState('true');
   const [message, setMassage] = useState('');

   const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

   useEffect(() => {
       if(feedbackEdit.edit === true) { 
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
       }
   }, [feedbackEdit])

   const handleTextChange = (e) => {
     if(text === ''){
          setBtnDisabled(true);
          setMassage(null);
     } else if ( text !== '' && text.trim().length <= 10 ) {
           setMassage('Text must be at least 10 characters')
           setBtnDisabled(true);
     }else {
          setMassage(null);
          setBtnDisabled(false);
     }
     setText(e.target.value);
   }

   const handleSubmit = (e) => {
     e.preventDefault();
     if(text.trim().length > 10){
        const newFeedback = {
          text,
          rating,
        }  
          
        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }else {

          addFeedback(newFeedback)
        }
        setText('');
     }
   }

  return (
    <Card>
     <form onSubmit={handleSubmit}>
          <h2>How Would you rate your service with us?</h2>
          {/* @todo - rating select component */}

          <RatingSelect select={(rating) => setRating(rating)}/>
          
          <div className='input-group'>
               <input 
               onChange={handleTextChange} 
               type='text' 
               placeholder='Write a review' 
               value={text}
               />
               <Button type='submit' isDisabled={btnDisabled}>Send</Button>
          </div>

          {message && <div className='message'>{message}</div>}
     </form>
    </Card>
  )
}

export default FeedbackForm