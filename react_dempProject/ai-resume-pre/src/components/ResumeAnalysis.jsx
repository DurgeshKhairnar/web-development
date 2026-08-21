import "@fortawesome/fontawesome-free/css/all.min.css";
import { useResume } from '../context/useResume';
import { useNavigate }from 'react-router-dom';

function ResumeAnalysis(){

    let useNavigation = useNavigate();
    const { resumeData } = useResume();

    const skillsList = [
        "Pyhton",
        "Excel",
        "Power Bi",
        "Num Py",
        "Pandas",
        "Tablue",
        "Nodes js",
        "React",
        "Flutter",
        "SQL"
    ]

     if (!resumeData) {
    return (
      <div className="min-h-screen  text-white flex items-center justify-center">
        <h2 className="text-black">Loading resume analysis...</h2>
      </div>
    );
  }


    return (
        <>
            <div className="min-h-screen w-full bg-white max-w-[1000px]  mx-auto ">

                <div className="w-full h-40 mt-5 rounded-2xl  bg-purple-100 flex justify-evenly items-center ">

                    <div className='flex justify-evenly h-30 items-center flex-col'>
                        <div className="w-15 h-15 bg-white rounded-full ">
                               <i className="fa-light fa-file"></i>
                        </div>
                        <div className="flex justify-evenly w-40 font-light ">
                            <div className="w-5 h-5 bg-green-400 rounded-full  "></div>
                            <h3>Upload Resume</h3>
                        </div>
                    </div>

                      <div className='flex justify-evenly h-30 items-center flex-col'>
                        <div className="w-15 h-15 bg-white rounded-full "></div>
                        <div className="flex justify-evenly w-40 font-light ">
                            <div className="w-5 h-5 bg-green-400 rounded-full">
                             
                            </div>
                            <h3>AI Analysis</h3>
                        </div>

                    </div>
                      <div className='flex justify-evenly h-30 items-center flex-col'>
                        <div className="w-15 h-15 bg-white rounded-full "></div>
                        <div className="flex justify-evenly w-40 font-light ">
                            <div className="w-5 h-5 bg-green-400 rounded-full  "></div>
                            <h3>Analysis Complete</h3>
                        </div>
                    </div>

                </div>
            {/* ---------2--------------- */}
                <div className="w-full h-23 mt-5  flex justify-center items-center flex-col">
                    <h1 className='font-bold text-2xl'>Resume Analysis Complete!</h1>
                    <p className="text-gray-500">Here is your detailed resume analysis report.</p>
                </div>
            {/* ---------3--------------- */}
             <div className="w-full p-2 mt-5 rounded-xl border-[1px] border-gray-200 bg-white flex justify-start items-start flex-col shadow-sm">
                    <div className="flex items-center justify-evenly w-50">
                            <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
                            <h1 className="font-bold">Candidate Profile</h1>
                    </div>
                    <div className='flex justify-evenly items-center w-full '>
                         {/* -------- 3.1 information name email mon */}
                            <div className='flex  h-35 w-70 justify-evenly gap-3
                              items-center'>
                                <div className="w-20 h-20 bg-purple-400 rounded-full
                                flex justify-center items-center text-3xl font-bold text-shadow-purple-800">
                                    {resumeData.candidate_name[0]}
                                </div>
                                
                                <div className='flex flex-col justify-evenly 
                                h-30'>
                                    <h1 className="font-bold text-[20px]">{resumeData.candidate_name}</h1>
                                    <p className="text-gray-500 text-sm">{resumeData.email}</p>
                                    <p className="text-gray-500 text-sm">{resumeData.mobile_no}</p>
                                    <p className="text-gray-500 text-sm">{resumeData.address}</p>
                                </div>
                            </div>
                      {/* 3.2 categorys skills */}
                    <div className='flex justify-evenly h-33 w-30 px-1 items-center flex-col border-gray-300 border-[1px] rounded-xl'>
                        <div className="w-10 h-10 bg-green-200 rounded-full "></div>
                            <p className='text-xs text-gray-500'>ATS score</p>
                            <p className='text-2xl font-bold'>{resumeData.ATS_score}</p>
                            <p className='text-xs text-gray-500'>Excellent</p>
                      
                    </div>
                     <div className='flex justify-evenly h-33 w-30 px-1 items-center flex-col border-gray-300 border-[1px] rounded-xl'>
                        <div className="w-10 h-10 bg-green-200 rounded-full "></div>
                            <p className='text-xs text-gray-500'>Skills</p>
                            <p className='text-2xl font-bold'>{resumeData.skills.length}</p>
                            <p className='text-xs text-gray-500'>Detected</p>
                      
                    </div>
                     <div className='flex justify-evenly h-33 w-30 px-1 items-center flex-col border-gray-300 border-[1px] rounded-xl'>
                        <div className="w-10 h-10 bg-green-200 rounded-full "></div>
                            <p className='text-xs text-gray-500'>Project</p>
                            <p className='text-2xl font-bold'>{resumeData.projects.length}</p>
                            <p className='text-xs text-gray-500'>Complete</p>
                      
                    </div>

                    </div>
             </div>
             {/* ---------4 skills and insights--------------- */}
               <div className="w-full p-1 mt-3 rounded-xl border-[1px] border-gray-200 bg-white flex justify-start items-start flex-col shadow-sm ">
                    <div className="flex items-center justify-evenly  w-50">
                            <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
                            <h1 className="font-bold">Skill & Insights</h1>
                    </div>
                    <div className='flex justify-evenly items-center w-full '>
                         {/* -------- 4.1 Skills  */}
                         <div className='w-full p-2 mt-5 rounded-xl border-[1px] border-gray-200 bg-white flex justify-start items-start flex-col mb-1 mx-1'>
                            <div className="flex items-center justify-evenly  w-20">
                                 <div className="w-7 h-7 bg-purple-200 rounded-full"></div>
                                 <h1 className="font-bold text-purple-700">Skill</h1>
                             </div>
                                <div className='w-full p-2 flex flex-wrap'>
                                {
                                    resumeData.skills.map((skills,idx) => (
                                        <div key={idx} className="p-1 px-2 rounded-2xl bg-purple-200 text-purple-900 font-semibold m-1 text-sm">
                                            {skills}
                                        </div>
                                    ))
                                }
                          </div>
                         </div>              
                    </div>
                    <div className='flex justify-evenly items-center w-full'>
                      <div className='w-full p-2 mt-5 rounded-xl border-[1px] border-green-300 bg-green-100 flex justify-start items-start flex-col mb-1 m-1'>
                            <div className="flex items-center justify-evenly  w-30">
                                 <div className="w-7 h-7 bg-green-200 rounded-full"></div>
                                 <h1 className="font-bold text-green-700">Strengths</h1>
                             </div>
                                <div className='w-full p-2 flex flex-wrap'>
                                {
                                    resumeData.strengths.map((skills,idx) => (
                                        <div key={idx} className="p-1 px-2 rounded-2xl bg-green-200 text-green-900 font-semibold m-1 text-sm">
                                            {skills}
                                        </div>
                                    ))
                                }
                          </div>
                        </div> 
                      </div>  
                       <div className='flex justify-evenly items-center w-full'>
                        <div className='w-full p-2 mt-5 rounded-xl border-[1px] border-orange-300 bg-orange-100 flex justify-start items-start flex-col mb-1 m-1'>
                            <div className="flex items-center justify-evenly  w-30">
                                 <div className="w-7 h-7 bg-orange-200 rounded-full"></div>
                                 <h1 className="font-bold text-orange-700">Skill Gaps</h1>
                             </div>
                                <div className='w-full p-2 flex flex-col flex-wrap'>
                                {
                                    resumeData.skills_gaps.map((skills,idx) => (
                                        <div key={idx} className="p-1 px-2 rounded-2xl bg-orange-200 text-orange-900 font-semibold m-1 text-sm">
                                            {skills}
                                        </div>
                                    ))
                                }
                          </div>
                         </div> 
                        </div>
             </div>
                <div className="w-full h-40 m-5  flex justify-center items-center flex-col">
                    <i className="fa-solid fa-rocket text-3xl text-purple-700"></i>
                    <h1 className='font-bold text-2xl'>Your almost ready!</h1>
                    <p className="text-gray-500">Start your AI Interview to practice and improve your skills.</p>
                    <button className='bg-purple-600 w-40 h-10 rounded-2xl flext justify-center items-center text-white font-bold cursor-pointer active:bg-purple-400' 
                    onClick={()=> useNavigation('/resumeAnalysi/questionAnswers')}
                    >Start AI Interview</button>
                </div>
    </div>
        </>
    )
}


export default ResumeAnalysis;