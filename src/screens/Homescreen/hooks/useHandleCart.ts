import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
  storeCartData,
  addToBuyNow,
  increaseBuyNowQuantity,
  decreaseBuyNowQuantity,
  deleteBuyNowData,
} from '../../../redux/reducers/cartReducer';

const useHandleCart = () => {
  const dispatch = useDispatch();

  const increase = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const decrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const deleteProduct = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleAddToCart = useCallback(
    item => {
      let _item = {
        ...item,
        quantity: 1,
      };
      dispatch(storeCartData(_item));
    },
    [dispatch],
  );

  const handleDeleteItem = useCallback(
    item => {
      dispatch(removeItemFromCart(item?.id));
    },
    [dispatch],
  );

  const buyNow = useCallback(
    item => {
      dispatch(addToBuyNow(item));
    },
    [dispatch],
  );
  const bumpBuyNowData = useCallback(() => {
    dispatch(increaseBuyNowQuantity());
  }, [dispatch]);

  const decreaseBuyNow = useCallback(() => {
    dispatch(decreaseBuyNowQuantity());
  }, [dispatch]);

  const deleteBuyNow = useCallback(() => {
    dispatch(deleteBuyNowData());
  }, [dispatch]);

  return {
    increase,
    decrease,
    deleteProduct,
    handleAddToCart,
    handleDeleteItem,
    buyNow,
    bumpBuyNowData,
    decreaseBuyNow,
    deleteBuyNow
  };
};

export default useHandleCart;
