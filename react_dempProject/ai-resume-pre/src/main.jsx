import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import ResumeAnalysis from './components/ResumeAnalysis.jsx';
import QuestionAnswer from './components/QuestionAnswer.jsx';
import { ResumeContextProvider } from './context/useResume.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ResumeContextProvider>
            <Routes >
                    <Route path="/" element={<App />} />
                    <Route path="/resumeAnalysis" element={<ResumeAnalysis />} />
                    <Route path="/resumeAnalysi/questionAnswers" element={<QuestionAnswer />} />
            </Routes>
    </ResumeContextProvider>  
  </BrowserRouter>
)
