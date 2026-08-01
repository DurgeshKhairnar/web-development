import vegetable_packe from '../../../assets/vegetable_packe.jpg';
import vegetable_packing from '../../../assets/vegtable_packing.jpg';

function DiscountBanner(){
    return (
        <div className="discount-wrapper">
              
            <div className="discount-container">
                    <div className="sub-conatiner1">
                        <div className='info'>
                            <h3>Fruit & Vegetables</h3>
                            <p>Get Update <span>30%</span>off</p>
                            <button>Shop Now</button>
                        </div>
                        <img className="vegImage" src={vegetable_packe} alt="vegetable_pack"></img>
                    </div>
                    <div className="sub-conatiner2">
                        <div className='info'>
                            <h3>Freshly Baked Buns</h3>
                            <p>Get Update <span>25%</span>off</p>
                            <button>Shop Now</button>
                        </div>
                        <img className="vegImage" src={vegetable_packing} alt="vegetable_pack"></img>
                    </div>
                </div>
            </div>
    )
}

export default  DiscountBanner;