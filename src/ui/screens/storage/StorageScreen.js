import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default StorageScreen = () => {
  const value = {
    name: 'Chimezie',
    job: 'Software Developer',
  };
  const name = {
    title: 'Native Developer',
  };
  const setdata = async () => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(value));
    } catch (e) {
      console.log('errror', e);
    }
  };
  const getdata = async () => {
    try {
      const result = await AsyncStorage.getItem('data');
      console.log(result);
      const results = await JSON.parse(result);
      console.log(results);
    } catch (e) {
      console.log('errror', e);
    }
  };
  const mergedata = async () => {
    try {
      await AsyncStorage.mergeItem('data', JSON.stringify(name));
    } catch (e) {
      console.log(e, 'error');
    }
    getdata();
  };
  useEffect(() => {
    setdata();
    mergedata();
  }, []);

  return (
    <View>
      <Text style={{color: 'black'}}>AsyncStorage</Text>
    </View>
  );
};
