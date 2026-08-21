import { createContext , useContext , useState } from 'react';


export const ResumeContext = createContext(null);


export function ResumeContextProvider({children}){
    const [resumeData, setResumeData] = useState(null);
    const [questionList, setQuestionList] = useState(null);

    return (
            <ResumeContext.Provider value={{resumeData , setResumeData, questionList, setQuestionList}}> 
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