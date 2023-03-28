import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, HStack} from 'native-base';
import {ButtonComponent} from '../../../components';
import {StyleSheet} from 'react-native';
import {
  ondelete,
  onsetdecreaseqty,
  onsetincreaseqty,
} from '../../../../redux-data/Slices/Productslice';
import {useDispatch} from 'react-redux';
const Cartscreen = () => {
  const dispatch = useDispatch();
  const {cartList} = useSelector(state => state.product);
  console.log(cartList, 'jkgjgj');
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <HStack style={{position: 'absolute', left: 150}}>
        <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>
          Your Cart
        </Text>
        <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>
          ({cartList.length})
        </Text>
      </HStack>
      <FlatList
        data={cartList}
        // keyExtractor={index => index}
        renderItem={({item, i}) => (
          <View key={i} style={styles.container1}>
            <HStack>
              <Text style={styles.txt}>{item.value.name}</Text>
              <Text style={styles.txt1}>{item.value.ram}</Text>
              <Text style={styles.txt1}>{item.value.camera}</Text>
              <Text style={styles.txt1}>{item.value.color}</Text>
              {/* <Text style={styles.txt1}>{item.value.qty}</Text> */}

              <ButtonComponent
                text="-"
                style={{height: 45, marginVertical: 8}}
                onPress={() => {
                  if (item.value.qty > 1) {
                    dispatch(onsetdecreaseqty(item.id));
                  } else {
                    dispatch(ondelete(item.id));
                  }
                }}
              />
              <ButtonComponent
                text={item.value.qty}
                style={{height: 45, marginVertical: 8}}
              />

              <ButtonComponent
                text="+"
                style={{height: 45, marginVertical: 8}}
                onPress={() => {
                  dispatch(onsetincreaseqty(item.id));
                }}
              />
              <ButtonComponent
                text="remove"
                style={styles.btn}
                onPress={() => dispatch(ondelete(item.id))}
              />
            </HStack>
          </View>
        )}
      />
    </View>
  );
};

export default Cartscreen;

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
