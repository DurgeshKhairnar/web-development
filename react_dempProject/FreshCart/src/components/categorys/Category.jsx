import Categorycard from '../cards/Categorycard.jsx'

function Category(){
    const categories = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/9c/7c/2a/9c7c2ad2a132cb1f63977d37f52f828e.jpg",
    title: "Snack & Munchies",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/ad/c6/5b/adc65ba1ed7b53593a16c7ece560fc12.jpg",
    title: "Bakery & Biscuit",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/a0/85/f8/a085f84ff78e48484c45a8b3771c4b9f.jpg",
    title: "Instant Food",
  },
  {
    id: 4,
    image: "https://i.pinimg.com/1200x/d9/f1/10/d9f110eb2cb1ce4ca900045a26ea7abe.jpg",
    title: "Tea,Coffee & Drinks",
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/0a/09/78/0a0978086dc93eac4ea05d458fed44eb.jpg",
    title: "Atta, Rice & Dal",
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/0e/43/70/0e4370bd8efadf1dc9108e03c235d142.jpg",
    title: "Masale",
  },  
];

    return (
            <div className="container-wrapper">
                  <div className="category-conatiner">
                  <h3>Feature Category</h3>
                    <div className="category-cards">
                            {
                                categories.map((items,idx) =>(
                                    <Categorycard key={idx} title={items.title} image={items.image}/>
                                ))
                            }
                    </div>
                  </div>
            </div>        
    )
}

export default Category;