function Card(props: any){
     console.log(props.obj.title)
  return (
      <div className="parent" >
          <div className="image"></div>
          <h3>{props.obj.title}</h3>
          <p>{props.obj.des}</p>
          <button>Action</button>
      </div>
  )
}


export default Card;