import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import AddToCart from './AddToCart';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {SCREENS} from '../../../utils/constants';

const {width} = Dimensions.get('window');

const ListItem = ({item = {}}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const navigation = useNavigation();

  const AddToFavourites = useCallback(() => {
    setIsFavourite(!isFavourite);
  }, [isFavourite]);

  useEffect(() => {
    const event = EventRegister.addEventListener('favs', ({fav, id}) => {
      if (item?.id === id) setIsFavourite(fav);
    });
    return () => EventRegister.removeAllListeners(event);
  }, []);

  const navigateToDetails = () => {
    navigation.navigate(SCREENS.DETAILSSCREEN, {
      isFavourite,
      id: item.id,
    });
  };

  return (
    <TouchableOpacity onPress={navigateToDetails} style={styles.container}>
      <TouchableOpacity
        onPress={AddToFavourites}
        style={styles.favouriteContainer}>
        {!isFavourite ? (
          <AntIcon name="hearto" size={15} color="#000" />
        ) : (
          <AntIcon name="heart" size={15} color="#FF8181" />
        )}
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={{uri: item?.thumbnail}} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.price}>${item?.price}</Text>
          <Text numberOfLines={1} style={styles.title}>
            {item?.title}
          </Text>
        </View>
        <AddToCart item={item} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    height: 194,
    backgroundColor: '#F8F9FB',
    width: (width - 20 * 3) / 2,
    marginBottom: 22,
    borderRadius: 12,
    padding: 20,
  },
  title: {fontSize: 14, fontWeight: '400', color: '#616A7D'},
  price: {fontSize: 14, fontWeight: '600', marginBottom: 4},
  details: {flex: 1},
  detailsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    paddingHorizontal: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {height: 80, width: 80, borderRadius: 8},
  imageContainer: {alignItems: 'center'},
  favouriteContainer: {position: 'absolute', left: 13, top: 13},
});
