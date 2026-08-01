import vegetable from "../../assets/vegetable.png";
import '../cards/category_card.css';
function Categorycard(props){
    return (
        <div className="category-card">
            <div className="image" ></div>
            <p>{props.name}</p>
        </div>
    )
}

export default Categorycard;