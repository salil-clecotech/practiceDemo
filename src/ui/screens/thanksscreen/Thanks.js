import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {wp, hp, Colors} from '../../../../utils';
import React from 'react';
import {Card} from 'native-base';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
export default Thanks = props => {
  const navigation = useNavigation();
  const {doctor, service, timing} = useSelector(state => state.appoinment);
  console.log(navigation);
  return (
    <Card style={styles.card}>
      <Text style={styles.thankstext}>Thanks for Booking!</Text>
      <Text style={styles.text2}>
        you booked an appointment with {`${doctor} for ${service} at ${timing}`}
        {console.log(doctor, 'doctor')}
      </Text>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.push('Bottomtab')}>
        <Text style={styles.text3}>GO TO MY APPOINTMENTS</Text>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  thankstext: {
    fontSize: 32,
    marginVertical: wp(2),
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp(20),
  },
  card: {
    height: hp(55),
    width: wp(90),
    alignSelf: 'center',
    marginVertical: hp(15),
    paddingHorizontal: wp(1),
  },
  text2: {
    color: Colors.grey,
    fontSize: 20,
    textAlign: 'center',
  },
  text3: {
    backgroundColor: Colors.Blue,
    color: Colors.white,
    width: wp(80),
    height: hp(6),
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    marginVertical: hp(12),
    textAlignVertical: 'center',
    borderRadius: wp(2),
    opacity: 0.9,
  },
});
