import { Link, useParams } from "react-router-dom";

import products from "../data";

const SingleProduct = () => {
  const {productid}=useParams();//takes whatever route number and stores it in the productid 
 const product= products.find((product)=>product.id===productid) ;
 const {image,name}=product
 console.log(product)
  return (
    <section className='section product'>
      <h2>single product</h2>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <Link to='/products'>
        back to products
      </Link>
    </section>
  );
};

export default SingleProduct;
