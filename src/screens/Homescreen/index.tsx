import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Header from './components/Header';
import useFetchProducts from './hooks/useFetchProducts';
import ListItem from './components/ListItem';
const {height} = Dimensions.get('window');

const HomeScreen = () => {
  const {allProducts = []} = useFetchProducts();

  const renderItem = ({item}) => {
    return <ListItem item={item} />;
  };

  const renderListHeader = () => {
    return (
      <View style={styles.recommended}>
        <Text style={styles.recommendedText}>Recommended</Text>
      </View>
    );
  };

  if (allProducts.length === 0) {
    return (
      <View style={[styles.container, styles.centreItems]}>
        <ActivityIndicator size="large" color="#2A4BA0" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={2}
        data={allProducts}
        keyExtractor={item => item?.id + ''}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        bounces={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        ListHeaderComponent={renderListHeader}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', height: height},
  contentContainerStyle: {
    paddingHorizontal: 10,
    paddingTop: 22,
    alignContent: 'center',
  },
  columnWrapperStyle: {justifyContent: 'space-around'},
  recommended: {
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  recommendedText: {fontSize: 30, fontWeight: '300'},
  centreItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
