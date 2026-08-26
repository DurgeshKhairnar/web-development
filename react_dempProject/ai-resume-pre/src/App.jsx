
import { useNavigate } from "react-router";
import HomeScreen from './components/pages/HomeScreen';
import NavBar from './components/pages/NavBar';
import ResumeAnalysis from './components/pages/ResumeAnalysis.jsx';
import QuestionAnswer from './components/pages/QuestionAnswer.jsx';
import ScoreCard from './components/pages/ScoreCard.jsx';
import { ResumeContextProvider } from './context/useResume.jsx';
import {Routes , Route} from 'react-router-dom';
import Upload_Screen from './components/pages/Upload_Screen.jsx';


import './App.css'

function App() {
     
  return (

      <ResumeContextProvider>
          <NavBar/>
            <Routes >
                
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/uploadResume" element={<Upload_Screen />} />
                    <Route path="/resumeAnalysis" element={<ResumeAnalysis />} />
                    <Route path="/resumeAnalysi/questionAnswers" element={<QuestionAnswer />} />
                    <Route path="/resumeAnalysi/questionAnswers/scorecard" element={<ScoreCard />} />
            </Routes>
    </ResumeContextProvider>
     
  )
}

export default App



//  {/* <ResumeAnalysis /> */}

//          
//           <button className='w-30 h-10 bg-purple-700 rounded-[5px] m-2 text-white active:bg-purple-500'
//           onClick={ handleButtonClick }
//           >
//              {buttonText}
//           </button>