import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
  storeCartData,
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

  return {increase, decrease, deleteProduct, handleAddToCart, handleDeleteItem};
};

export default useHandleCart;
