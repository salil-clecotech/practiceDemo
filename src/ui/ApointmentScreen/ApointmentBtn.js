import React from 'react';
import {ButtonComponent} from '../../components';
import {HStack} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {wp, hp, Colors} from '../../../utils';
export default ApointmentBtn = ({onPressNextbtn, onPressBackbtn}) => {
  const navigation = useNavigation();
  return (
    <HStack space={3} alignItems="center" style={styles.btn}>
      <ButtonComponent
        text="Back"
        style={styles.btnback}
        px={10}
        onPress={onPressBackbtn}
      />
      <ButtonComponent
        text="Next"
        style={styles.btnnext}
        onPress={onPressNextbtn}
        px={10}
      />
    </HStack>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: wp(10),
    justifyContent: 'center',
  },
  btnback: {
    backgroundColor: Colors.grey,
    width: wp('43%'),
    height: hp('7%'),
  },
  btnnext: {
    backgroundColor: Colors.Blue,
    width: wp('43%'),
    height: hp('7%'),
  },
});
