import { Link } from "react-router-dom";
import products from '../data'
const Products = () => {
  return (
    <>
       <section className='section'>
    
      <div className='products'>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`${product.id}`}>more info</Link>{/*need to math the route in app.js */}
            </article>
          );
        })}
      </div>
    </section>
    </>
  );
};

export default Products;
