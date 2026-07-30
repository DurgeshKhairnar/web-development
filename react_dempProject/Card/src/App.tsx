import Card from "./Card.tsx";
function App(){
  const info = [
    {
      title:"Apple 1",
      des:"Apple is good fruite for health"
    },
    {
      title:"Apple 2",
      des:"Apple color is red"
    }
  ]
  return (
   <div className="container">
        {
          info.map((item,index) => <Card  obj={item} key={index}/>)
        }
   </div>
  )
}


export default App;