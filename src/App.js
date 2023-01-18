
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'




import './index.css'
import AboutPages from './components/Pages/AboutPages'
import AboutIcon from './components/AboutIcon'
import { FeedbackProvider } from './Context/FeedbackContext'


const App = () => {
     
     
     
  return (

     <FeedbackProvider>
    <Router>
     <Header />
    <div className="container">
    <Routes>
    <Route exact path="/" 
      element={
          <>
           <FeedbackForm />
           <FeedbackStats />
           <FeedbackList  />
          </>
      }
    ></Route>
    <Route   path="/about" element={<AboutPages/>} ></Route>
    </Routes>

    <AboutIcon/>
    </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App