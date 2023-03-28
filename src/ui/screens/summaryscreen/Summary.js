import React from 'react';
import {View, Text, Card} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../../../utils';
import {wp, hp} from '../../../../utils';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
export default Summary = props => {
  const {doctor, service, timing} = useSelector(state => state.appoinment);
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
      <Card style={styles.card}>
        <Text style={styles.intext}>In 3 days</Text>
        <Text
          style={styles.consulttxt}
          fontSize="30">{`Consultation with ${doctor}`}</Text>
        <Text style={styles.timetxt}>17 November</Text>
        <Text style={styles.timetxt}>{timing}</Text>
        <Text style={styles.timetxt}>Main Street, 18 </Text>
        <Text style={styles.timetxt}>+1 111 111 1111</Text>
        <TouchableOpacity
          style={styles.reschedulebtn}
          onPress={() => {
            console.log(props);
            props.navigation.jumpTo('Apointment', {cIndex: 2});
          }}>
          <Text style={styles.rescheduletxt}>RESCHEDULE</Text>
        </TouchableOpacity>
      </Card>
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
    borderRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
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
  card: {
    height: hp(55),
    marginHorizontal: wp(8),
    backgroundColor: '#3A67D7',
    opacity: 0.9,
    color: 'white',
  },
  intext: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
    paddingHorizontal: wp(5),
  },
  consulttxt: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: hp(1),
    paddingHorizontal: wp(5),
  },
  timetxt: {
    color: 'white',
    opacity: 0.7,
    marginVertical: hp(2),
    fontSize: 20,
    paddingHorizontal: wp(5),
  },

  reschedulebtn: {
    width: wp(45),
    height: hp(6),
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 7,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginVertical: hp(3),
    paddingHorizontal: wp(5),
  },
  rescheduletxt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 17,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: hp(1.5),
  },
});
