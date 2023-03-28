import {
  ImageComponent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {ButtonComponent} from '../../../components';
import {FlatList, HStack, Image, Badge, VStack, Box, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import IconAsset from '../../../../utils/IconAsset';
import Wishlistslice from '../../../../redux-data/Slices/Wishlistslice';
import {
  onsetcamera,
  onsetcolor,
  onsetram,
  onaddcart,
} from '../../../../redux-data/Slices/Productslice';
import {onaddwishlist} from '../../../../redux-data/Slices/Wishlistslice';

import {useDispatch} from 'react-redux';

const Productdetailscreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {setname, setram, setcamera, setcolor, cartList} = useSelector(
    state => state.product,
  );
  const {wishListData} = useSelector(state => state.wishlist);

  const WishlistBadge = ({badgedata}) => {
    return (
      <Badge // bg="red.400"
        colorScheme="danger"
        rounded="full"
        mb={-4}
        ml={-8}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 12,
        }}>
        {badgedata}
      </Badge>
    );
  };
  const arr = [{ram: '4gb'}, {ram: '6gb'}, {ram: '8gb'}];
  const arr1 = [{camera: '30mp'}, {camera: '40mp'}, {camera: '48mp'}];
  const arr2 = [{color: 'black'}, {color: 'grey'}, {color: 'blue'}];
  const storage = ele => {
    dispatch(onsetram(ele));
  };
  const cam = ele => {
    dispatch(onsetcamera(ele));
  };
  const col = ele => {
    dispatch(onsetcolor(ele));
  };
  const wishlistfun = () => {
    dispatch(
      onaddwishlist({
        ram: setram,
        camera: setcamera,
        color: setcolor,
        name: setname,
        qty: 1,
        id: new Date().toLocaleTimeString(),
      }),
    );
  };
  const addcart = () => {
    var temp = {
      ram: setram,
      camera: setcamera,
      color: setcolor,
      name: setname,
    };

    if (cartList.length > 0) {
      // cartList.forEach((ele, key) => {
      //   var obj = {
      //     ram: ele.ram,
      //     camera: ele.camera,
      //     color: ele.color,
      //     name: ele.name,
      //   };

      // if (JSON.stringify(obj) === JSON.stringify(temp)) {
      //   console.log('TRUE', key);
      //   updateQty(key);
      // } else {
      //   console.log('FALSE', 'djfdjhfjh');

      //   addQty();
      // }
      //  });
      var indexOfEle = cartList.findIndex(
        el =>
          el.ram === temp.ram &&
          el.camera === temp.camera &&
          el.color === temp.color &&
          el.name === temp.name,
      );
      if (indexOfEle >= 0) {
        updateQty(indexOfEle);
        console.log(indexOfEle, 'jkkjlkljjkllkjkl;;klkl;klkl;');
      } else {
        addQty();
      }
    } else {
      //if cartlist length==0
      addQty();
    }
  };
  const updateQty = key => {
    dispatch(
      onaddcart({
        type: 'update',
        value: {},
        index: key,
        id: new Date().toLocaleTimeString(),
      }),
    );
  };
  const addQty = () => {
    dispatch(
      onaddcart({
        type: 'add',
        value: {
          ram: setram,
          camera: setcamera,
          color: setcolor,
          name: setname,
          qty: 1,
        },
        index: '',
        id: new Date().toLocaleTimeString(),
      }),
    );
  };
  const empty = () => {
    if (setram == '') {
      alert('please select RAM');
    } else if (setcamera == '') {
      alert('please select Camera');
    } else if (setcolor == '') {
      alert('please select Colour');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#202F3A', opacity: 0.9}}>
      <HStack>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 30,
            marginTop: 5,
            marginLeft: 50,
          }}>
          Prodcut Detail
        </Text>

        <HStack style={styles.imgview}>
          <TouchableOpacity onPress={() => navigation.navigate('Cartscreen')}>
            <Box alignItems="center">
              <VStack>
                <WishlistBadge badgedata={cartList.length} />
                <Image source={IconAsset.cart} style={styles.img} alt="img" />
              </VStack>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wishscreen')}>
            <Box alignItems="center">
              <VStack>
                {/* <Badge // bg="red.400"
                  colorScheme="danger"
                  rounded="full"
                  mb={-4}
                  ml={-8}
                  zIndex={1}
                  variant="solid"
                  alignSelf="flex-end"
                  _text={{
                    fontSize: 12,
                  }}>
                  {wishListData.length}
                </Badge> */}
                <WishlistBadge badgedata={wishListData.length} />
                <Image source={IconAsset.like} style={styles.img} alt="like" />
              </VStack>
            </Box>
          </TouchableOpacity>
        </HStack>
      </HStack>
      <View style={styles.container1}>
        <Text style={styles.txt}>RAM</Text>
        <FlatList
          data={arr}
          keyExtractor={index => {
            index;
          }}
          renderItem={({item, index}) => {
            return (
              <View key={index}>
                <ButtonComponent
                  text={item.ram}
                  style={[
                    styles.btn,
                    {backgroundColor: setram === item.ram ? 'pink' : 'teal'},
                  ]}
                  onPress={() => {
                    storage(item.ram);
                  }}
                />
              </View>
            );
          }}
          horizontal
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.txt}>CAMERA</Text>
        <FlatList
          data={arr1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View key={index}>
                <ButtonComponent
                  text={item.camera}
                  style={[
                    styles.btn,
                    {
                      backgroundColor:
                        setcamera === item.camera ? 'pink' : 'teal',
                    },
                  ]}
                  onPress={() => cam(item.camera)}
                />
              </View>
            );
          }}
          horizontal
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.txt}>RAM</Text>
        <FlatList
          data={arr2}
          keyExtractor={index => {
            index;
          }}
          renderItem={({item, index}) => {
            return (
              <View key={index}>
                <ButtonComponent
                  text={item.color}
                  style={[
                    styles.btn,
                    {
                      backgroundColor:
                        setcolor === item.color ? 'pink' : 'teal',
                    },
                  ]}
                  onPress={() => col(item.color)}
                />
              </View>
            );
          }}
          horizontal
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.txt}>Your Product .... {setname}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt1}>{setram}</Text>
          <Text style={styles.txt1}>{setcamera}</Text>
          <Text style={styles.txt1}>{setcolor}</Text>

          <HStack style={{position: 'absolute', right: 0}}>
            <ButtonComponent
              text="add cart"
              style={styles.btn1}
              onPress={() => {
                // navi();
                empty();
                addcart();
              }}
            />
            <ButtonComponent
              text="wishlist"
              style={styles.btn1}
              onPress={() => {
                wishlistfun();
              }}
            />
          </HStack>
        </View>
        {/* <FlatList
          data={arr2}
          keyExtractor={index => {
            index;
          }}
          renderItem={({item, index}) => {
            return (
              <View key={index}>
                <ButtonComponent
                  text={item.color}
                  style={styles.btn}
                  onPress={() => dispatch(onaddcart(item.color))}
                />
              </View>
            );
          }}
          horizontal
        /> */}
      </View>
    </View>
  );
};

export default Productdetailscreen;

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#49AAB9',
    marginVertical: 30,
    height: 100,
    width: 380,
    alignSelf: 'center',
    borderRadius: 20,
  },
  txt: {
    color: 'black',
    fontSize: 20,
    margin: 15,
  },
  btn: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 40,
    // marginVertical: 5,
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
    marginBottom: 10,
  },
  imgview: {
    position: 'absolute',
    right: 20,
  },
  img: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginTop: 5,
  },
});
