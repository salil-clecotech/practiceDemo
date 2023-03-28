import React, {useEffect, useState} from 'react';
import {View, Text, Card} from 'native-base';
import {ActivityIndicator, FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import {onchangeOffset} from '../../../../redux-data/Slices/ListSlice';
import {useSelector, useDispatch} from 'react-redux';
import {listAPICall} from '../../../../redux-data/Slices/ListSlice';
export default Listscreen = () => {
  const dispatch = useDispatch();
  const {apidata, isRefresh, offset, isLoading, isLoadmore} = useSelector(
    state => state.list,
  );
  console.log(apidata, 'apidata');
  useEffect(() => {
    getList();
  }, [offset]);

  const onhandlerefresh = async () => {
    console.log('test');
    dispatch(onchangeOffset({offset: offset + 1, listMode: 'refresh'}));
  };
  // const onhandleendreached = async () => {
  //   console.log('test1');
  //   dispatch(onchangeOffset({offset: offset + 1, listMode: 'loadmore'}));

  // };
  // const onhandleendreached = async () => {
  //   console.log('test1');
  //   dispatch(onchangeOffset());

  // };

  const getList = async () => {
    var resultAction = await dispatch(listAPICall({offset: offset}));
    console.log(resultAction);
    if (listAPICall.fulfilled(resultAction)) {
      console.log('success');
    } else {
      console.log('error');
    }
  };
  return (
    <View style={{flex: 1}}>
      <Text style={styles.box}>Api Data</Text>
      {isLoading ? <ActivityIndicator color="red" /> : null}
      <Card style={{backgroundColor: 'pink', width: 350, alignSelf: 'center'}}>
        <FlatList
          data={apidata}
          keyExtractor={element => {
            element.id;
          }}
          renderItem={({item, index}) => {
            return (
              <View style={{height: 120}}>
                <Text style={styles.boxtext}>
                  {index}
                  ===
                  {item.name}
                </Text>
              </View>
            );
          }}
          ListFooterComponent={() => {
            return isLoadmore ? <ActivityIndicator color="blue" /> : null;
          }}
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.box}>component you want to add at Top</Text>
            </View>
          )}
          refreshing={isRefresh}
          onRefresh={onhandlerefresh}
        />
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    textAlign: 'center',
  },
  boxtext: {
    flex: 1,
    width: 350,
    textAlign: 'center',
    backgroundColor: 'grey',
    alignSelf: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
});
