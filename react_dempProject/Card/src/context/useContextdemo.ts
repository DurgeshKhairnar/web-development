import { createContext , useContext} from 'react';


export const StudentContext = createContext({
        studentList:[
            {
            "firstName":'',
            "LastName":'',
            "email":'',
            "mobile_no":'',
            "gender":'',
            'stream':''
          }
        ]
});


export  const StudentContextProvider = StudentContext.Provider;

export function useStudentList(){
    return useContext(StudentContext);
}