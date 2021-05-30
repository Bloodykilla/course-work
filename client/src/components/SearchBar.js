import React from 'react'

const SearchBar = () => {
    return (
        <section className="searchbar">
            <div className="search-container">
                <div className="search-body">
                    <div className="section des">
                        <h4>destination</h4>
                        <input type="text" className="text-area" placeholder="Country..."/>
                    </div>

                    <div className="section dep">
                        <h4>departure</h4>
                        <input type="text" className="text-area" placeholder="dd--mm--yy"/>
                    </div>

                    <div className="section rang">
                        <h4>rang</h4>
                        <input type="text" className="text-area" placeholder="Any rang..."/>
                    </div>
                    
                    <div className="section price">
                        <h4>avarage price</h4>
                        <input type="text" className="text-area" placeholder="Any price..."/>
                    </div>

                    <div className="search-button">
                        <button class="btn">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    </div>
                </div>
        </section>
    )
}

export default SearchBar
