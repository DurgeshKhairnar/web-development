import {Link } from 'react-router-dom';


function Nav(){
    return (
        <div className="nav-container">
                <nav>
                    <p>FreshCart</p>
                    <div>
                            {/* <Link to='/'>Home</Link>
                            <Link to='/footer'>Footer</Link>
                            <Link to='/products'>Products</Link> */}

                             <a href="#products">Products</a>

                    </div>
                    <div className="search-btn">
                        <input type='search' placeholder='Search for products'></input>
                        <div className="nav-icons">
                            <div className="heart" ><i className="fa-regular fa-heart"></i></div>
                            <div className="user" ><i className="fa-regular fa-user"></i></div>
                            <div className="cart" ><i className="fa-brands fa-opencart"></i></div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Nav;