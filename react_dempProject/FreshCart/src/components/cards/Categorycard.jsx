import vegetable from "../../assets/vegetable.png";
import '../cards/category_card.css';
function Categorycard(props){
    console.log(props.image)
    return (
        <div className="category-card">
            <img className="image"src={props.image} alt="catgeory image" />
            <p>{props.title}</p>
        </div>
    )
}

export default Categorycard;