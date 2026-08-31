

function Search(){
    return (
        <div className="relative w-full">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500"></i>

                <input
                    type="text"
                    placeholder="Search Product.."
                    className="h-10 w-full rounded-2xl border-2 border-gray-200 bg-white pl-10 focus:border-green-500 focus:outline-none"
                />
            </div>
    );
}

export default Search;