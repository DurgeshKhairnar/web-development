    import vegetable from "../../../assets/vegetable.png";

    function HomeBanner(){
        return (
            <div className="container-wrapper">
            <div className="container">
                    <div className="content">
                        <div className="des-container"><p>Opening Sale Discount 50%</p></div>
                        <h1>SuperMarket For Fresh Grocery</h1>
                        <h4>Introduced a new model for online grocery shopping and convenient home delivey</h4>
                        <button className="des-btn">Shop Now</button>
                    </div>
                    <div className="image-container">
                        <img className='img' src={vegetable} alt="vegetable image"></img>
                    </div>
                </div>
            </div>
        )
    }

    export default HomeBanner;