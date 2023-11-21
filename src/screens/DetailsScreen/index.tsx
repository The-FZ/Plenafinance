import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
import useFetchDetails from './hooks/useFetchDetails';
import Header from './components/Header';
import Rating from './components/Rating';
import Price from './components/Price';
import ItemTitle from './components/ItemTitle';
import ButtonLG from '../../components/common/ButtonLG';
import Details from './components/Details';
import useHandleCart from '../Homescreen/hooks/useHandleCart';
import {useSelector} from 'react-redux';
import Favourite from '../../components/common/Favourite';
import {EventRegister} from 'react-native-event-listeners';
import Carousel from '../../components/common/Carousel';
import {SCREENS} from '../../utils/constants';

const DetailsScreen = ({route = {}, navigation = {}}) => {
  const cartData = useSelector(state => state?.cartData?.cartData);
  const {isFavourite, id} = route?.params;
  const {details} = useFetchDetails(id);
  const {handleAddToCart, buyNow} = useHandleCart();
  let index = cartData.findIndex(i => i.id === id);
  const [fav, setFav] = useState(isFavourite);

  const fireEvent = () => {
    setFav(prev => !prev);
    EventRegister.emit('favs', {fav: !fav, id});
  };

  if (!details) {
    return (
      <View style={[styles.container, styles.centerItems]}>
        <ActivityIndicator size="large" color="#2A4BA0" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <ItemTitle brand={details?.brand} title={details?.title} />
        <Rating rating={details?.rating} />
        <View style={styles.carouselContainer}>
          <Carousel data={details?.images} />
          <View style={styles.favourite}>
            <Favourite
              isFavourite={fav}
              onPress={() => {
                fireEvent();
              }}
            />
          </View>
        </View>
        <Price
          price={details?.price}
          discountPercentage={details?.discountPercentage}
        />
        <View style={styles.buttonContainer}>
          <ButtonLG
            type="primary"
            text={index === -1 ? 'Add To Cart' : 'Go To Cart'}
            onPress={() => {
              index === -1
                ? handleAddToCart({...details, quantity: 1})
                : navigation.navigate(SCREENS.CARTSCREEN, {buy_now: false});
            }}
          />
          <ButtonLG
            type="secondary"
            text="Buy Now"
            onPress={() => {
              buyNow({...details, quantity: 1});
              navigation.navigate(SCREENS.CARTSCREEN, {buy_now: true});
            }}
          />
        </View>
        <Details details={details?.description} />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  centerItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  favourite: {position: 'absolute', right: 36, top: 14},
  carouselContainer: {height: 210, marginTop: 25, backgroundColor: '#F8F9FB'},
});
