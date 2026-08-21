import { useState, useRef } from 'react';
import { useNavigate } from "react-router";
import { useResume } from './context/useResume';
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
    <>
        
          {/* <ResumeAnalysis /> */}

          <input type='file' accept=".pdf" ref={fileRef} className="hidden" onChange={uploadFileInServer} />

          <button className='w-30 h-10 bg-purple-700 rounded-[5px] m-2 text-white active:bg-purple-500'
          onClick={ handleButtonClick }
          >
             {buttonText}
          </button>
    </>
  )
}

export default App
