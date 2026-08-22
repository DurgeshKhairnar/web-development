import { useResume } from '../context/useResume';
import { useState } from 'react';


function QuestionAnswer(){

      const questions = [
        "Tell me about yourself.",
        "What are your strengths and weaknesses?",
        "Explain one project you have worked on.",
        "Why should we hire you?",
        "Where do you see yourself in the next 5 years?"
        ];

    const { questionList } = useResume();

    let [questionIndex , setQuestionIndex] = useState(0);
    const [answer , setAnswer] = useState('');

    const [answerQuestion , setAanswerQuestionList] = useState([]);

    function handleSubmit(){
        
          const newAnswer = {
                question: questions[questionIndex],
                answer: answer
            };

         const updateList = [...answerQuestion,newAnswer]

         setAanswerQuestionList(updateList)

          console.log("Updated answer list:", updateList);

        if(questionIndex < questions.length - 1){
            setQuestionIndex(prev => prev + 1)
            setAnswer('')
        }else{
                console.log(" Final answer :", updateList);
                sendQuestionAns(updateList);
                console.log('1st called')
        }
    }

    function sendQuestionAns(answer) {

             console.log("sendQuestionAns called");

            fetch("http://localhost:3000/sendQuestionAns", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({ansList:answer})
            })
                .then((res) => res.json())
                .then((data) => {
                console.log("API Response:", data);
                })
                .catch((err) => {
                console.log("Error:", err);
                });
            }

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
                          {/* question answer */}
                          <div className='w-full h-110 rounded-[5px] m-1 border-[1px] border-gray-200 flex justify-evenly items-center p-1'>
                                <div className='w-full h-105 rounded-[5px] m-1 border-[1px] border-gray-200 flex justify-between items-start flex-col p-2'>
                                    <div className='w-full'>
                                    <p className='text-purple-800 font-bold'>Practice Question</p>
                                    <p className='font-bold flex-wrap'>{questions[questionIndex]}</p>
                                    <p className='text-gray-400 text-[10px] font-semibold'>Take your time and provide details answer</p>
                                    <p className='text-purple-800 font-bold text-sm'>Your Answer</p>
                                   <textarea
                                        value={answer}
                                        name="answer"
                                        rows="6"
                                        placeholder="Write your answer here..."
                                        className="w-full p-4 border-2 border-gray-300 rounded-lg 
                                                    focus:outline-none focus:border-purple-500 
                                                    resize-none"
                                        onChange={(e) => setAnswer(e.target.value)}            
                                    ></textarea>
                                    </div>
                                     <button className='bg-purple-600 w-40 h-10 rounded-[5px] flext justify-center items-center text-white font-bold cursor-pointer active:bg-purple-400'
                                     onClick={handleSubmit} 
                                    >Submit Answer</button>
                                </div>
                                  <div className='w-full h-105 rounded-[5px] m-1 border-[1px] border-gray-200 flex justify-evenly items-start flex-col p-2'>
                                     <p className='text-purple-800 font-bold'>Question</p>
                                     {
                                        questions.map((que,idx) => (
                                            <div  className={`w-full h-20 rounded-[5px] border m-1 p-4 flex-wrap cursor-pointer ${
                                                        que === questions[questionIndex]
                                                        ? "border-purple-500"
                                                        : "border-gray-200"
                                                    }`}
                                            onClick={() => setQuestionIndex(idx)}
                                            key={idx}
                                            >{idx+1}.{que}</div>
                                        ))
                                     }
                                </div>
                               
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