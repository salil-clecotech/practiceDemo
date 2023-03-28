import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, HStack} from 'native-base';
import {ButtonComponent} from '../../../components';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {onremove} from '../../../../redux-data/Slices/Wishlistslice';
const Wishscreen = () => {
  const dispatch = useDispatch();
  const {wishListData} = useSelector(state => state.wishlist);
  console.log(wishListData, 'jkkjgjhgjgjkj');
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <HStack style={{position: 'absolute', left: 150}}>
        <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>
          Your Wishlist
        </Text>
        <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>
          ({wishListData.length})
        </Text>
      </HStack>
      <FlatList
        data={wishListData}
        // keyExtractor={index => index}
        renderItem={({item, i}) => (
          <View key={i} style={styles.container1}>
            <HStack>
              <Text style={styles.txt}>{item.name}</Text>
              <Text style={styles.txt1}>{item.ram}</Text>
              <Text style={styles.txt1}>{item.camera}</Text>
              <Text style={styles.txt1}>{item.color}</Text>
              <ButtonComponent
                text={item.qty}
                style={{height: 45, marginVertical: 8}}
              />
              <ButtonComponent
                text="remove"
                style={styles.btn}
                onPress={() => dispatch(onremove(item.id))}
              />
            </HStack>
          </View>
        )}
      />
    </View>
  );
};

export default Wishscreen;

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#49AAB9',
    marginVertical: 30,
    height: 60,
    width: 380,
    alignSelf: 'center',
    borderRadius: 20,
  },
  txt: {
    color: 'black',
    fontSize: 20,
    margin: 12,
  },
  btn: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 8,
    marginVertical: 7,
    height: 45,
  },
  btn2: {
    color: 'black',
    fontSize: 20,
    marginVertical: 15,
    height: 30,
    backgroundColor: 'pink',
  },
  btn1: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  txt1: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 15,
  },
});
