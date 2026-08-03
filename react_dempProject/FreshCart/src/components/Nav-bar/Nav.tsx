function Nav(){
    return (
        <div className="nav-container">
                <nav>
                    <p>FreshCart</p>
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