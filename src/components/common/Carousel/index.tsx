import React, {useState} from 'react';
import {View, FlatList, Image, StyleSheet, Dimensions} from 'react-native';
import Paginator from './Paginator';
const {width} = Dimensions.get('screen');

const Carousel = ({data = []}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View>
      <Paginator data={data} currentIndex={currentIndex} />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index + ''}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          const index = (x / width).toFixed(0);
          setCurrentIndex(Number(index));
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Image
                resizeMode="contain"
                source={{uri: item}}
                style={styles.image}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  image: {height: '100%', width: width},
  container: {flex: 1},
});
