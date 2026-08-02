import ProductCard from '../../components/product_card/ProductCard.jsx';
import '../../components/product_card/productCard.css';
function Product_discount() {
  const products = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/14/fb/f5/14fbf589a2f366f1c3c38a217bf04876.jpg",
    category: "Snack & Munchies",
    title: "Potato Chips",
    price: 60,
    discountPrice: 45,
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/27/26/27/272627e6d214d491af91ad630f98c25c.jpg",
    category: "Bakery & Biscute",
    title: "Chocolate Cookies",
    price: 120,
    discountPrice: 95,
    rating: 4.7,
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/f4/7e/32/f47e32c5aa1fa7114873b7d0bb908544.jpg",
    category: "Instant Food",
    title: "Instant Noodles",
    price: 80,
    discountPrice: 65,
    rating: 4.3,
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/1a/eb/e2/1aebe2130388d1d9fb418b8db4565972.jpg",
    category: "Tea",
    title: "Green Tea",
    price: 250,
    discountPrice: 210,
    rating: 4.8,
  },
  {
    id: 5,
    image: "https://i.pinimg.com/1200x/b5/0c/e2/b50ce2a1b3be33d738d5ed76be1d14a8.jpg",
    category: "Coffee & Drinks",
    title: "Cold Coffee",
    price: 180,
    discountPrice: 150,
    rating: 4.6,
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/5f/be/69/5fbe69400d79429356f75b43c76bd77a.jpg",
    category: "Atta, Rice & Dal",
    title: "Basmati Rice 5kg",
    price: 650,
    discountPrice: 580,
    rating: 4.9,
  },
  {
    id: 7,
    image: "https://i.pinimg.com/736x/10/d7/7c/10d77cce546927b76f0f9b73f1b0c34a.jpg",
    category: "Instant Food",
    title: "Maggi",
    price: 20,
    discountPrice: 25,
    rating: 4.8,
  },
  {
    id: 8,
    image: "https://i.pinimg.com/736x/69/e0/42/69e0422926b02a226cebf787a711256a.jpg",
    category: "Snack & Munchies",
    title: "Salted Peanuts",
    price: 90,
    discountPrice: 70,
    rating: 4.2,
  },
  {
    id: 9,
    image: "https://i.pinimg.com/1200x/b5/f3/d3/b5f3d3ac276a99782774483cf03ccd93.jpg",
    category: "Bakery & Biscute",
    title: "Butter Bread",
    price: 55,
    discountPrice: 45,
    rating: 4.4,
  },
   {
    id: 10,
    image: "https://i.pinimg.com/736x/84/06/96/840696b8808ac539e7f52ea441d4bf8e.jpg",
    category: "oil",
    title: "Fortune oil",
    price: 55,
    discountPrice: 45,
    rating: 4.4,
  },
];
  return (
    <div className="product-weapper">
      <div className="product-container">
        <h3>Popular Product</h3>
        <div className="products">
              {products.map((items, idx) => (
                <ProductCard key={idx} 
                image={items.image}
                title={items.title} 
                category={items.category}
                discountPrice={items.discountPrice}
                price={items.price}
                image={items.image}
                rating={items.rating}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Product_discount;
