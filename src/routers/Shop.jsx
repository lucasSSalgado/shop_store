import { useState, useEffect } from "react"
import ProductBox from "../components/ProductBox"

class Product {
    constructor(id, title, price, description, category, image, quantity) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.category = category
        this.image = image
        this.quantity = quantity
    }
    addQuantity(value) {
        this.quantity = this.quantity + parseInt(value)
    }
}

function Shop() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(resp => resp.json()
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    let current = data[i]
                    let productOBJ = new Product(
                        current.id, current.title, current.price,
                        current.description, current.category, current.image
                        )
                        setProducts(actualProducst => [...actualProducst, productOBJ])
                }
            })
            .catch(error => console.log(error)))
    }, [])

    return(
        <div className="shop_container">
            {
                products.length === 0 
                    ? <p>Loadings...</p> 
                    : products.map(
                        prod => {return(
                            <p key={prod.id}>
                                <ProductBox prod={prod}/>
                            </p>
                        )})
            }
        </div>
    )
}

export { Shop, Product }