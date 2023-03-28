import React from 'react';
import {View, Text} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../../../utils';
import {wp, hp} from '../../../../utils';
import {useNavigation} from '@react-navigation/native';

export default Booking = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text1} fontSize="35">
        Your Appointments
      </Text>
      <View style={styles.btn1}>
        <TouchableOpacity>
          <Text style={styles.upcomingtext}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.pasttext}>Past</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>You have no schedule</Text>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          navigation.navigate('Apointment', {cIndex: 0});

          //   navigation.navigate('Bottomtab', {screen: 'Appointment'});
        }}>
        <Text style={styles.touchtxt}>BOOK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontWeight: 'bold',
    marginVertical: hp(2),
    paddingHorizontal: wp(5),
  },
  btn1: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: hp(5),
  },
  upcomingtext: {
    width: wp(45),
    height: hp(6),
    backgroundColor: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'blue',
    opacity: 0.5,
    textShadowRadius: 10,
  },
  pasttext: {
    borderRadius: 5,
    width: wp(45),
    height: hp(6),
    backgroundColor: 'grey',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: 'grey',
    letterSpacing: 1,
  },
  touch: {
    backgroundColor: '#3A67D7',
    width: wp(48),
    height: hp(6),
    marginVertical: hp(5),
    opacity: 0.9,
    alignSelf: 'center',
    borderRadius: 5,
  },
  touchtxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: hp(2),
  },
});
