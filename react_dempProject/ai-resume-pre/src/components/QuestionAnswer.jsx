import { useResume } from '../context/useResume';


function QuestionAnswer(){

    const { questionList } = useResume();

//      if (!questionList) {
//     return (
//       <div className="min-h-screen  text-white flex items-center justify-center">
//         <h2 className="text-black">Loading Practice Question...</h2>
//       </div>
//     );
//   }

    return (
        
                    <div className='min-h-screen mx-auto  max-w-[1000px] w-full p-4'>
                        {/* purple container */}
                        <div className='w-full h-40 bg-violet-700 rounded-2xl flex items-start justify-evenly flex-col px-5 m-1'>
                            <h3 className='text-white'>Welcome back,</h3>
                            <h1 className='text-white font-bold text-2xl'>Durgesh Khairnar</h1>
                            <h3 className='text-white'>Ready for your AI Interview? Let's assess your skills!</h3>
                        </div>
                    </div>    
 
    );
}

export default QuestionAnswer;


{/* <div className='text-black w-100 h-100 border-2 border-black'>
                {
                    questionList?.map((questions , idx) => (
                        <h1 key={idx}>{idx+1}.{questions}</h1>
                    ))
                }
          </div>  */}