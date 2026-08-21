import vegetable from "../../assets/vegetable.png";
function ProductCard(props){
    return (
        <section id="products">
        <div className="card-container">
            <div className="product-image">
                    <img src={props.image} alt="product-image"></img>
            </div>
            <p className="category">{props.category}</p>
            <h5>{props.title}</h5>
            <div className="price-btn-container">
                <div className='price'><p>${props.discountPrice}</p><span>${props.price}</span></div>
                <button>+ Add</button>
            </div>
        </div>
        </section>
    );
}

export default ProductCard;


    {/* <p><i className="fa-solid fa-star">    
            </i><span>4.5</span></p> */}