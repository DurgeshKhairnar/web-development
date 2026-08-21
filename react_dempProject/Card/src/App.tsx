import { useState } from 'react';

import { StudentContextProvider , useStudentList} from "./context/useContextdemo";

function App(){

    const [studentList, setStudentList] = useState<Array<{
      firstName: string;
      LastName: string;
      email: string;
      mobile_no: string;
      gender: string;
      stream:string;
    }>>([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [stream, setStream] = useState('');


    function handleSubmit(e:any){
        e.preventDefault();
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(mobile)
        console.log(gender)
        console.log(stream)
        setStudentList((students) => [...students, {
            firstName,
          LastName: lastName,
            email,
          mobile_no: mobile,
            gender,
            stream,
        }]);

        console.log(studentList)
    }


  return (
    <StudentContextProvider value={{ studentList }}>
      <div className="w-screen h-screen p-5 flex justify-around">
        
          <form  onSubmit={handleSubmit}  className="w-105 h-100 mx-1 p-2 border-2 border-gray-200 rounded-1xl 
          flex justify-around flex-col
          ">

                <input type='text' placeholder="Enter First Name" 
                 onChange={(e) => setFirstName(e.target.value)}
                className="border-2 border-[#d1d5db] focus:border-blue-500 focus:outline-none px-4 py-2 w-full
                "/>

                 <input type='text' placeholder="Enter Last Name" 
                 onChange={(e) => setLastName(e.target.value)}
                 className="border-2 border-[#d1d5db] focus:border-blue-500 focus:outline-none px-4 py-2 w-full
                "/>

                <input type='email' placeholder="Enter your Email"
                     onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-[#d1d5db] focus:border-blue-500 focus:outline-none px-4 py-2 w-full
                "/>

                <input type='text' placeholder="Enter Mobile No" 
                 onChange={(e) => setMobile(e.target.value)}
                className="border-2 border-[#d1d5db] focus:border-blue-500 focus:outline-none px-4 py-2 w-full
                "/>

                <div className="flex justify-around ">
                    <input type='radio' name='gender' value='Male'
                     onChange={(e) => setGender(e.target.value)}
                    ></input> Male
                    <input type='radio' name='gender' value='Female'
                     onChange={(e) => setGender(e.target.value)}
                    ></input> Female
                </div>

                <select className=""
                  onChange={(e) => setStream(e.target.value)}
                >
                    <option>select your subject</option>
                    <option>Sci</option>
                    <option>Commers</option>
                    <option>Art</option>
                </select>
                
                <button className="w-full h-8 bg-blue-500 text-white">Submit</button>
      </form>
        <div className='w-200 my-2 p-5 h-full border-gray-200 border-2'>
                {
                    studentList.map((student,idx) => (
                        <div key={idx} className='border-gray-200 border-2 w-50 m-1 flex justify-start flex-col flex-wrap'>
                                <div className="flex items-center justify-start"> 
                                        <div className="bg-purple-500 w-10 h-10 rounded-full text-white font-bold flex items-center justify-center ">{student.firstName[0].toUpperCase()} </div>
                                        <h4>{student.firstName}</h4>
                                </div>
                                <p>{student.LastName}</p>
                                <p>{student.mobile_no}</p>
                                <p>{student.gender}</p>
                                <p>{student.email}</p>
                                <p>{student.stream}</p>
                        </div>
                    ))
                }
        </div>
      </div>
     </StudentContextProvider> 
  )
}


export default App;