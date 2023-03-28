import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {listAPICall2} from '../../../../redux-data/Slices/Productslice';
// import Productdetailscreen from './Productdetailscreen';
import {useSelector, useDispatch} from 'react-redux';
import {
  onchangeoffset,
  ondelete,
  onsetname,
} from '../../../../redux-data/Slices/Productslice';
import {FlatList, HStack} from 'native-base';
import {StyleSheet} from 'react-native';
import {wp, hp} from '../../../../utils';
import {ButtonComponent} from '../../../components';
import {useNavigation} from '@react-navigation/native';
const Productscreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const navi = () => {
    navigation.navigate('Productdetailscreen');
  };
  const data = element => {
    dispatch(onsetname(element));
  };
  const del = () => {
    console.log('gjh');
  };
  const {apidata2, offset, isLoading, loadMore, isRefresh} = useSelector(
    state => state.product,
  );
  // console.log(apidata2, 'apidata2');
  useEffect(() => {
    getdata();
  }, [offset]);
  const getdata = async () => {
    let result = await dispatch(listAPICall2({offset: offset}));
    console.log(result);
    if (listAPICall2.fulfilled(result)) {
      console.log('success');
    } else {
      console.log(err);
    }
  };
  const handlerefresh = async () => {
    console.log('refreshing');
    dispatch(onchangeoffset({offset: 0, listMode: 'refresh'}));
  };
  const handleendreached = async () => {
    console.log('end');
    dispatch(onchangeoffset({offset: offset + 1, listMode: 'loadmore'}));
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>
        Product
      </Text>
      {isLoading ? <ActivityIndicator color="red" /> : null}
      <HStack>
        <FlatList
          data={apidata2}
          keyExtractor={index => {
            index;
          }}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navi();
                data(item.name);
              }}>
              <HStack style={styles.container}>
                <Text style={styles.txt1}>
                  {index}=={item.name}
                  {/* {setname} */}
                </Text>
                <TouchableOpacity style={styles.btn}>
                  <ButtonComponent text="edit" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={del}>
                  <ButtonComponent text="delete" />
                </TouchableOpacity>
              </HStack>
            </TouchableOpacity>
          )}
          refreshing={isRefresh}
          onRefresh={handlerefresh}
          onEndReached={handleendreached}
          ListFooterComponent={() => {
            return loadMore ? <ActivityIndicator /> : null;
          }}
          onEndReachedThreshold={0.5}
        />
      </HStack>
    </View>
  );
};

export default Productscreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    width: wp(100),
    height: hp(10),
    textAlign: 'center',
    marginVertical: 10,
  },
  txt1: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 30,
  },
  btn: {marginHorizontal: 15, marginVertical: 20},
});
