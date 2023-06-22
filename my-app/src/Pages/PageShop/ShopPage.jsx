import axios from "axios";
import { useEffect, useState } from "react";
import "../PageShop/ShopPage.css"

const Products = () => {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products?populate=ProductMedia")
      .then(({ data }) => setProducts(data.data))
      .catch((error) => setError(error));
  }, []);

  const handleSearch = () => {
    if (searchTerm === "") {
      // If search term is empty, show all items
      axios
        .get("http://localhost:1337/api/products?populate=ProductMedia")
        .then(({ data }) => setProducts(data.data))
        .catch((error) => setError(error));
    } else {
      // Filter products based on search term
      const filteredProducts = products.filter(({ attributes }) =>
        attributes.ProductText.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  if (error) {
    // Print errors if any
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      <div>
        <input id="searchbarmenu"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div id="ProductTopSpace">
        {products.map(({ id, attributes }) => (
          <a key={id}>
            <div id="ProductCard">
              <img
                id="ShopProductImage"
                src={`http://localhost:1337${attributes.ProductMedia.data[0].attributes.url}`}
                alt=""
              />
              <p id="ProductTextName">{attributes.ProductText}</p>
              <p id="ProductRichTextName">{attributes.ProductRichText}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Products;
