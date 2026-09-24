import { useState , useEffect } from 'react';

function Demo(){

    const [text , setText ] = useState('');
    const [mbNumber , setNumber] = useState('');

    const [infoList , setInfoList] = useState([]);

    const [isUpdate , setIsUpdate] = useState(false);

    const [myId , setMyId] = useState(0)

    function handleSubmit(){
        const myList = {
            id: infoList.length + 1,
            name:text,
            moNumber:mbNumber
        }
        setInfoList(prev => {
           const updateList = prev.some((itm) => itm.id == myId);
           console.log(updateList);
           if(updateList){
            console.log('is called')
            return prev.map((item) => item.id == myId ? {...item,name:text,moNumber:mbNumber} : item)
           }

           return [...prev,myList];
        });

        setText('');
        setNumber('')
    }

    function removeList(id){
        const currentList = infoList.filter((item) => item.id !== id);
        setInfoList(currentList);
    }

    return (
        <div >
           <div  
            className='flex flex-col'>
                 <input 
                 value={text}
                 onChange={(e) => setText(e.target.value)}
                 className='h-10 w-80 p-1 border-2 border-gray-300 m-1' type='text' placeholder='Enter Your task...' />
                 <input 
                 value={mbNumber}
                 onChange={(e) => setNumber(e.target.value)}
                 className='h-10 w-80 p-1 border-2 border-gray-300 m-1' type='text' placeholder='Enter Your Number' />
                 <button 
                  onClick={handleSubmit}
                 className='cursor-pointer active:bg-amber-700  h-10 w-80 p-1 bg-amber-500 font-bold text-white m-1'>{isUpdate ? 'Update' : 'Add'}</button>
           </div>
           <div className='flex flex-col'>
                {
                    infoList?.map((item,index) => (
                        <div key={index} className='w-80 border m-1 p-1 flex justify-between items-center'>
                            <p>{item.id}</p>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.moNumber}</p>
                            </div>
                            <div>
                               <button 
                               onClick={() => {
                                setText(item.name);
                                setNumber(item.moNumber)
                                setMyId(item.id)
                                setIsUpdate(true)
                               }}
                               className='h-7 w-7 bg-blue-400 rounded-full text-white m-1 cursor-pointer'>U</button>
                               <button 
                               onClick={() => {
                                    removeList(item.id);
                               }}
                               className='h-7 w-7 bg-red-400 rounded-full text-white m-1 cursor-pointer'>D</button>
                            </div>    
                        </div>   
                    ))
                }
           </div>
        </div>
    );
}

export default Demo;