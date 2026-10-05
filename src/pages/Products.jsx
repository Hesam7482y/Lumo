import { useEffect, useState } from "react";
import '../pages/products.css'
import { Link } from "react-router-dom";
export default function Products(){
    const api="https://dummyjson.com/products";

    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [search, setSearch] = useState("");
    
    const handelcategory=(p_category)=>{
        let new_p=products.filter((product)=>product.category!=p_category)
        setProducts(new_p)
    }

    async function getProducts() {
        const response=await fetch(api);
        if(response.ok){
            const data=await response.json();
            setProducts(data.products);
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])
    return(
        <>
        {loading && <h3 className="loading">Loading .. </h3>}
        <input className="search" type="text" placeholder="Search products..." onChange={(e) => setSearch(e.target.value)} />
        <div className="products">
              {
                products .filter(product => product.title.toLowerCase().startsWith(search.toLowerCase())).map(product=><div className="product" style={{textAlign:"center"}} >
                       <img src={product.thumbnail} className="img"/>
                    <div>
                        <p>{product.title}</p>
                         <hr className="hr"></hr>
                         <div className="div-brand"> 
                         <p>{product.price}$</p>
                         <p>{product.brand}</p>
                         <p>{product.category}</p>
                         </div> 
                            <hr className="hr"></hr>
                           <Link to={"/product/" + product.id}> <button className="button">Add+</button></Link>
                    
                    </div>
                    </div>)
             }
        </div>
      
        </>
    )

}