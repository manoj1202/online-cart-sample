import React from "react"

import   ProductListing from "../feature/product-Listing"

import data from "../data/products.json"

const HomePage =(props) =>{
    return(
        <div>
            <h1>Home Page</h1>
            <ProductListing products={data.products} />
        </div>
    )
}

export default HomePage