import axios from "axios";
import "../PageShop/ShopPage.css"
import { useEffect, useState } from "react";

const Products = () => {
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

  
    useEffect(() => {
        axios
          .get("http://localhost:1337/api/products?populate=ProductMedia")
          .then(({ data }) => setProducts(data.data))
          .catch((error) => setError(error));
      }, []);

      if (error) {
        // Print errors if any
        return <div>An error occured: {error.message}</div>;
      }

      return (<>
        <div id="ProductTopSpace">
        {products.map(({ id, attributes }) => (
            <a key={id}>
              <div id="ProductCard">
              <img id="ShopProductImage" src={`http://localhost:1337${attributes.ProductMedia.data[0].attributes.url}`} alt=""/>
                <p id="ProductTextName">{attributes.ProductText}</p>
                <p id="ProductRichTextName">{attributes.ProductRichText}</p>
              </div>
            </a>
          ))}
        </div>
    </>);
  };
  
  export default Products;
