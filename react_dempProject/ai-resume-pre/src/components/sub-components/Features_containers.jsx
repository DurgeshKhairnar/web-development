import cloudy from '../../assets/cloudy.png';


function Features_containers(props){
    return(
         <div className='border-gray-200  w-50 border-[1px] flex flex-col justify-center items-start p-2 rounded-[5px]'>

             <div className='w-10 h-10  rounded-full'>
                <img className='object-cover w-10 h-10' src={cloudy} alt='img' />
             </div>
             <p className='font-semibold text-[12px]'>{props.title}</p>
             <p className='font-semibold text-[10px] text-gray-500'>
                                {props.des}</p>
        </div>
    )
}

export default Features_containers;