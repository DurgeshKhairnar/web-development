import Categorycard from '../cards/Categorycard.jsx'

function Category(){
    return (
            <div className="container-wrapper">
                  <div className="category-conatiner">
                  <h3>Feature Category</h3>
                    <div className="category-cards">
                        <Categorycard  name={"Snack & Munchies"}/>
                        <Categorycard  name={"Bakery & Biscute"}/>
                        <Categorycard  name={"Instant Food"}/>
                        <Categorycard  name={"Tea , Coffee & Drinks"}/>
                        <Categorycard  name={"Atta, Rice & Dal"}/>
                        <Categorycard  name={"Baby Care"}/>
                    </div>
                  </div>
            </div>        
    )
}

export default Category;