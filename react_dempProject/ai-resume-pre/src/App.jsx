import { useState, useRef } from 'react'
import './App.css'

function App() {

      const fileRef = useRef(null);
      const [buttonText,setButtonText] = useState("Upload File")
      const [resumeData,setResumeData] = useState({});

      const handleButtonClick = () => {
          fileRef.current.click();
      }

      const uploadFileInServer = async (e) => {
          const file = e.target.files[0];
          console.log("Name:", file.name);
          setButtonText(file.name)

          if(!file) return;

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
              setButtonText('Upload File')
          }
          


      }catch (e){
  
            console.error("Upload error:", e);

            setButtonText("Upload File");
      }

  };

   

 
  return (
    <>
          <input type='file' accept=".pdf" ref={fileRef} className="hidden" onChange={uploadFileInServer} />

          <button className='w-30 h-10 bg-purple-700 rounded-[5px] m-2 text-white active:bg-purple-500'
          onClick={ handleButtonClick }
          >
             {buttonText}
          </button>

          <div className="m-10 p-5">
            <h1  className="m-10">{resumeData.ATS_score}</h1>
                  {
                     resumeData.project_questions?.map((que,idx) => (
                        <h3 key={idx}>{idx+1} {que}</h3>
                     ))
                  }
          </div>
    </>
  )
}

export default App
