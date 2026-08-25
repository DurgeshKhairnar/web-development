import homeScreen from '../../assets/homescreen.png';
import Features_containers from '../sub-components/Features_containers';
import cloudy from '../../assets/cloudy.png';
import ask from '../../assets/ask.png';
import achievement  from '../../assets/achievement.png';
import rising from '../../assets/rising.png';
import protection from '../../assets/protection.png';

function HomeScreen(){
    return (
        <div className='mx-auto min-h-screen max-w-[1000px] p-2'>
            <div className='w-full h-70 p-1 flex justify-between'>
                <div className='w-full h-67 p-1 m-0.5 flex flex-col justify-evenly items-start'>

                    <div className='bg-purple-200 w-40 h-7 rounded-2xl flex justify-center items-center'>
                        <p className='text-purple-900 text-[9px] font-semibold'>AI-Powered Career Assistant</p>
                    </div>
                        <div>
                          <p className='font-semibold text-3xl'>Analyze Your Resume.</p>
                           <p className='font-semibold text-3xl text-purple-500'>Ace Your Interview.</p>
                        </div>
                     <p className='text-gray-500 text-[15px]'>upload your resume and get-AI analysis, personalized feedback, and interview question tailored to your profile.</p>
                     <button className='h-10 w-full bg-purple-500 rounded-[5px] font-semibold text-white'>Upload Your Resume</button>
                </div>
                <div className="w-full h-[268px] p-1 m-0.5">
                    <img
                        className="w-full h-full object-contain"
                        src={homeScreen}
                        alt="Home screen"
                    />
                </div>  
            </div>
            <div className='w-full h-25 flex flex-col justify-evenly items-center mb-2'>
                <div className='bg-purple-200 w-40 h-7 rounded-2xl flex justify-center items-center'>
                        <p className='text-purple-900 text-[9px] font-semibold'>AI-Powered Career Assistant</p>
                </div>
                 <p className='font-semibold text-2xl'>Everything You Need to Succeed</p>
                  <p className='text-gray-500 text-[12px]'>
                    our AI tools help you imporove your resume and prepare for interviews effectively.
                  </p>
            </div>
               <div className='w-full h-30 flex justify-between p-2 items-center'>
               < Features_containers title={'Resume Analysis'} 
               des={'Get AI-powered feedback and improve your resume scoring.'}
               img={cloudy}/>

                < Features_containers title={'Smart Questions'} 
               des={'Receive role-specific interview question tailored to you.'}
               img={ask}/>

                < Features_containers title={'Score & Feedback'} 
               des={'Get a detailed score card with strengths and improvement.'}
               img={achievement}/>

                < Features_containers title={'Track Progress'} 
               des={'Monitor your imporovement and track your preparation.'}
               img={rising}/>
               
                  < Features_containers title={'Secure & Private'} 
               des={'Your data is safe with us and never shared with anyone.'}
               img={protection}/>
                 
            </div>
       
        </div>
    )
}


export default HomeScreen;


  