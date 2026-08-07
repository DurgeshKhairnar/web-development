import { useState } from "react";


function CardCounter(){

    const [menu,setMenu] = useState(
    [
        {
            id:1,
            name:"Pav Bhaji",
            count:1,
            price:10
        },
          {
            id:2,
            name:"Pullav",
            count:1,
            price:25
        }

    ]);

    function increment(id:Number){
      const increatemtMenu =  menu.map((item) => (
            item.id === id ? {...item, count:item.count + 1,price:item.price} : item   
        ))
        setMenu(increatemtMenu);
    }

    function decrement(id:Number){
      const increatemtMenu =  menu.map((item) => (
            item.id === id ? {...item, count:item.count - 1,price:item.price} : item   
        ))
        setMenu(increatemtMenu);
    }

    return (
        <>
                {
                    menu.map((item,idx)=>{
                        return <div className="menu-Container" key={idx}>
                    <button className="increse" onClick={() => increment(item.id)}>
                        +
                    </button>
                     <p className="count">
                        {item.price * item.count}
                     </p>
                     <button className="decrese" onClick={() => decrement(item.id)}>
                        -
                    </button>
                 </div>
                    })
                }
        </>
    )
}

export default CardCounter;