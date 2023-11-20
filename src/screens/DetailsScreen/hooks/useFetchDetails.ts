import {useState, useEffect, useCallback} from 'react';
import {ClientFetch} from '../../../Network';

const useFetchDetails = (prodId: number) => {
  const [details, setDetails] = useState(null);

  const fetchDetails = useCallback(async (id: number) => {
    let data = await ClientFetch.getProductDetails(id);
    setDetails(data);
  }, []);

  useEffect(() => {
    fetchDetails(prodId);
  }, [fetchDetails, prodId]);

  return {details};
};

export default useFetchDetails;
