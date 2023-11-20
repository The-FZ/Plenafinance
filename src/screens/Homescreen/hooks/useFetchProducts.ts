import {useState, useEffect, useCallback} from 'react';
import {ClientFetch} from '../../../Network';

const useFetchProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    let data = await ClientFetch.getAllProducts();
    setAllProducts(data?.products);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {allProducts};
};

export default useFetchProducts;
