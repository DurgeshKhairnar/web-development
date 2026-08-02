
function Review_container(){
    return (
        <div className="review-wrapper">
            <div className="review-container">
              <div className="content">
                <h5>Testimonals</h5>
                <p className="tes">Testimonal From <br/>
                <span className="color-text">Our Loyal Customer</span></p>
                <img src='https://i.pinimg.com/736x/fc/af/7a/fcaf7aec4b7be05a0d062eff7851d2aa.jpg' alt="customer_image"></img>
                <p className='description'>"The quality of the products is outstanding, and the prices are very reasonable. Shopping here has become part of my weekly routine.FreshCart always delivers fresh fruits and vegetables. The packaging is excellent, and the delivery is always on time."</p>
                <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </span>
               <h5 className='customer-name'>Johan Doe</h5>
              </div>
            </div>
        </div>
    );
}

export default Review_container;