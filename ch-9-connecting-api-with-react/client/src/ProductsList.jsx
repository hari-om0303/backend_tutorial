import './ProductList.css';
import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const getProducts = async () => {
    const res = await axios.get('/products');
    console.log(res.data);

    setProducts(res.data.products || []);
    setTotal(res.data.total || 0);
  };

  const handleClick = async (id) => {
    const res = await axios.delete(`/products/${id}`);
    if (res.data?._id) {
      setProducts((prev) => prev.filter((p) => p._id !== res.data._id));
      setTotal((prev) => prev - 1);
    }
  };

  const handlePage = async (page) => {
    const res = await axios.get(`/products?page=${page}`);
    setProducts(res.data.products || []);
    setTotal(res.data.total || 0);
  };

  const handleSort = async (e) => {
    const [field, order] = e.target.value.split('.');
    const res = await axios.get(`/products?sort=${field}&order=${order}`);
    setProducts(res.data.products || []);
    setTotal(res.data.total || 0);
  };

  useEffect(() => {
    getProducts();
  }, []);

return (
  <div className="product-list-container">
    <div className="product-sort">
      <select onChange={handleSort}>
        <option value="price.desc">Price High to Low</option>
        <option value="price.asc">Price Low to High</option>
        <option value="rating.desc">Rating High to Low</option>
        <option value="rating.asc">Rating Low to High</option>
      </select>
    </div>

    <div className="pagination">
      {total > 0 &&
        Array.from({ length: Math.ceil(total / 4) }, (_, i) => (
          <button key={i} onClick={() => handlePage(i + 1)}>
            {i + 1}
          </button>
        ))}
    </div>

    <div className="product-grid">
      {Array.isArray(products) &&
        products.map((product) => (
          <Product
            key={product._id}
            {...product}
            handleClick={handleClick}
          />
        ))}
    </div>
  </div>
);
}

export default ProductList;
