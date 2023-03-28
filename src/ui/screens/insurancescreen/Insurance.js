import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from 'native-base';
import {wp, hp} from '../../../../utils';

export default function Insurance() {
  const arr = ['PPO', 'DHMO', 'Denti-Cal', 'Western Dental', 'No Insurance'];
  return (
    <View>
      <Text style={styles.text}>INSURANCE TYPE</Text>
      {arr.map((value, index) => (
        <View key={index}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>{value}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'grey',
    marginVertical: hp(2),
    marginHorizontal: wp(5),
  },
  btn: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    marginVertical: wp(2),
    width: wp(75),
    height: hp(6),
    alignSelf: 'center',
  },
  btntxt: {
    color: 'grey',
    // alignSelf: 'flexStart',
    fontSize: 20,
    marginVertical: hp(1.5),
  },
});
