import { useResume } from '../../context/useResume'

function ScoreCard(){

    const { interviewResult } = useResume();

    return (
        <div className='min-h-screen w-full bg-white max-w-[1000px]  mx-auto p-4'>
            <div className='w-full h-30  flex justify-center 
            items-center flex-col '>
                <p className='font-bold text-3xl mb-1'>Interview Complete</p>
                <p className='text-[13px] text-gray-500'>Here is your AI-powered interview feedback</p>
            </div>

            <div className="w-full h-52 flex justify-evenly items-center mb-4 ">

                    <div className="w-100 h-48 flex justify-center items-center flex-col border-2 border-gray-200 mx-1 rounded-xl">
                    
                        <div className='border- h-25 w-40 flex items-center justify-evenly flex-col m-1 '>
                                <p className='font-semibold'><span className='text-[30px] font-bold text-purple-800'>{(interviewResult.overall_score !== undefined) ? interviewResult.overall_score  : '0'}</span>/10</p>
                                <p className='font-semibold'>Overall Score</p>
                        </div>
                    </div>

                    <div className="w-full h-48 flex justify-start items-start p-2 flex-col border-2 border-gray-200 mx-1 rounded-xl">
                            <p className='font-bold text-[18px]'>Overall Performance</p>
                            <p className='flex-wrap'>{interviewResult.overall_feedback}</p>
                    </div>

            </div>

            <div className="w-full flex justify-evenly items-start mb-4 border-[1px] border-gray-200 p-1">

               <div className='w-full  flex flex-col justify-evenly items-start mb-4  m-1 p-2'>
                 <p className='text-green-400 font-bold'>STRENGTS</p>
                    {
                        interviewResult.strengths.map((strengt,idx) =>(
                            <div key={idx} className='border-[2px] border-gray-200 p-2 m-1 rounded-[5px] font-semibold'>{strengt}</div>
                        ))
                    }
               </div>

                <div className='w-full flex flex-col justify-evenly items-start mb-4  m-1 p-2'>
                    <p className='text-red-400 font-bold'>WEAKNESSES</p>
                    {
                        interviewResult.weaknesses.map((strengt,idx) =>(
                            <div key={idx} className='border-[2px] border-gray-200 p-2 m-1 rounded-[5px] font-semibold'>{strengt}</div>
                        ))
                    }
                </div>
                                
                 <div className='w-full  flex flex-col justify-evenly items-start mb-4 m-1 p-2'>
                    <p className='text-purple-400 font-bold'>RECOMMENDATIONS</p>
                    {
                        interviewResult.recommendations.map((strengt,idx) =>(
                            <div key={idx} className='border-[2px] border-gray-200 p-2 m-1 rounded-[5px] font-semibold'>{strengt}</div>
                        ))
                    }
                 </div>
                

            </div>
            
        </div>
    );
}


export default ScoreCard;