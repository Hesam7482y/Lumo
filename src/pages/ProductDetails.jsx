import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import '../pages/products.css'

export function ProductDetails(){
    const {id}=useParams();
    const api="https://dummyjson.com/products/"+ id;

    const [product,setProduct]=useState({});
    const [loading,setLoading]=useState(true);

    async function getProduct() {
        const response=await fetch(api);
        if(response.ok){
            const data=await response.json();
            setProduct(data);
            setLoading(false);
        }
    } 
    useEffect(()=>{
        getProduct()
    },[id])
return(
    <>
    {loading && <h3 className="loading">loading ... </h3>}

    {!loading && (
        <div className="details">
            <div className="details-img-box">
                <img className="details-img" src={product.images[0]} alt={product.title} />
            </div>

            <div className="details-info">
                <div className="details-badges">
                    <span className="badge">{product.category}</span>
                    <span className="badge rating">★ {product.rating}</span>
                </div>

                <h1 className="details-title">{product.title}</h1>
                {product.brand && <p className="details-brand">by {product.brand}</p>}
                <p className="details-price">${product.price}</p>
                <p className="details-desc">{product.description}</p>
                <p className={"stock " + (product.availabilityStatus === "In Stock" ? "in" : "low")}>
                {product.availabilityStatus}
                </p>
                <button className="button details-btn">Shopping</button>
            </div>
        </div>
    )}
    </>
)
}