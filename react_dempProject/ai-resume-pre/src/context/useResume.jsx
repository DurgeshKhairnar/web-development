import { createContext , useContext , useState , useEffect } from 'react';


export const ResumeContext = createContext(null);


export function ResumeContextProvider({children}){
    const [resumeData, setResumeData] = useState(null);
    const [questionList, setQuestionList] = useState([]);
    const [interviewResult, setInterviewResult] = useState([]);

     const [isLogin,setIsLogin] = useState(() => {
            const islog = localStorage.getItem('isLogin');
            return  islog === 'true';
        });

        useEffect(() => {
            localStorage.setItem('isLogin',isLogin)
        },[isLogin])

    return (
            <ResumeContext.Provider value={{resumeData , setResumeData, questionList, setQuestionList,interviewResult,setInterviewResult , isLogin, setIsLogin}}> 
                {children} 
            </ResumeContext.Provider>
    );
}

export function useResume(){
    const context = useContext(ResumeContext);

    if(!context){
        throw new Error('useResume must be used inside ResumeProvider')
    }

    return context;
}