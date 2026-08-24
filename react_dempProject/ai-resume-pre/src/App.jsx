import { useState, useRef } from 'react';
import { useNavigate } from "react-router";
import { useResume } from './context/useResume';
import HomeScreen from './components/pages/HomeScreen' 
import './App.css'

function App() {
      let navigate = useNavigate();
      const { setResumeData , setQuestionList } = useResume();
      const fileRef = useRef(null);
      const [buttonText,setButtonText] = useState("Upload File")
   

      const handleButtonClick = () => {
         fileRef.current.click();         
      }

        const uploadFileInServer = async (e) => {
          const file = e.target.files[0];
          
          console.log('file',file.name)

          if(!file) return;

          console.log("Name:", file.name);
          setButtonText(file.name)

          if(file.type !== 'application/pdf'){
            alert('Please upload a PDF file');
            return;
          }

             const formData = new FormData();
             formData.append("resumePdf",file);

      try{

          const response = await fetch('http://localhost:3000/uploadPdf',
            {
              method:'POST',
              body:formData
            }
          );

          if(response.status === 201){
              const data = await response.json();
              console.log( ` api data ${response.status}`)
              console.log( ` api data ${data.data.project_questions}`)
              setResumeData(data.data);
              setQuestionList(data.data.technical_questions)
              navigate('/resumeAnalysis')
              setButtonText('Upload File')
          }
          


      }catch (e){
  
            console.error("Upload error:", e);

            setButtonText("Upload File");
      }

  
    
    
    };

    

   

 
  return (

    <HomeScreen/>
        // <div className='mx-auto min-h-screen w=full max-w-[1000px] p-2 flex justify-center items-center flex-col'>
        //           <div className='w-full h-30  flex justify-center 
        //     items-center flex-col '>
        //               <p className='font-bold text-3xl mb-1'>Upload Your Resume</p>
        //               <p className='text-[13px] text-gray-500'>Upload your to get AI-powered analysis and interview questions customized for your profile</p>
        //        </div>
        //        <div className='w-140 h-70 border-2 border-gray-200 flex justify-center items-center flex-col'>
        //             <p className='font-bold text-xl mb-1'>Upload Your Resume</p>
        //             <button className='bg-purple-600 w-40 h-10 rounded-[5px] flext justify-center items-center text-white font-bold cursor-pointer active:bg-purple-400' 
        //             onClick={()=> console.log('')}
        //             >Start AI Interview</button>
        //             <p className='font-semibold text-gray-500 text-[13px]'>Supported formate:PDF</p>
        //             <p className='font-semibold text-gray-500 text-[13px]'>MAX file size: 5MB </p>
        //        </div>

        //        <div className='w-70 h-20 border-[2px] border-gray-200 p-1 rounded-[5px] m-2 flex flex-col justify-evenly items-start'>
        //                   <p className='font-semibold text-[15px]'>Your data is secure</p>
        //                   <p className='font-semibold text-[12px] text-gray-500'>We ensure your data is safe and confidential. your resume is only for analysis.</p>
        //        </div>
        // </div>
  )
}

export default App



//  {/* <ResumeAnalysis /> */}

//           <input type='file' accept=".pdf" ref={fileRef} className="hidden" onChange={uploadFileInServer} />

//           <button className='w-30 h-10 bg-purple-700 rounded-[5px] m-2 text-white active:bg-purple-500'
//           onClick={ handleButtonClick }
//           >
//              {buttonText}
//           </button>