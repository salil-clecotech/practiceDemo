import React from 'react';
import {View, Text, FlatList, Center, Button} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {wp, hp} from '../../../../utils';
import {useSelector} from 'react-redux';
const Timing = ({onsetselecttiming}) => {
  const {timing} = useSelector(state => state.appoinment);
  const arr = [
    {date: 'NOV 17', slot: ['11am', '1pm', '3pm', '4pm', '7pm']},
    {date: 'NOV 23', slot: ['10am', '11am']},
    {date: 'NOV 25', slot: ['11am', '12pm']},
  ];
  return (
    <View>
      <Text style={styles.text}>NEAREST ALAN PETERSON SLOTS</Text>
      <FlatList
        data={arr}
        renderItem={({item, index}) => {
          return (
            <View style={styles.box}>
              <Text style={styles.datetext}>{item.date}</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {item.slot.map((itemslot, keyslot) => (
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.timebox,
                        {
                          backgroundColor:
                            timing === itemslot ? 'pink' : 'white',
                        },
                      ]}
                      onPress={() => onsetselecttiming(itemslot)}
                      key={keyslot}>
                      <Text style={[styles.timeboxtext]}>{itemslot}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          );
        }}
      />
      <Text style={styles.showtext}>Show Calender</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(5),
    backgroundColor: 'red',
    height: hp('60%'),
    width: wp('90%'),
    alignSelf: 'center',
  },
  box: {
    marginVertical: wp(2),
  },
  text: {
    color: 'grey',
    paddingHorizontal: 13,
    marginVertical: 10,
  },
  datetext: {
    fontSize: 15,
    opacity: 0.6,
  },
  timebox: {
    width: wp('25%'),
    height: hp('6%'),
    marginVertical: wp(1),
    marginHorizontal: wp(1),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  timeboxtext: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginVertical: wp(3.5),
  },

  showtext: {
    color: 'blue',
    marginVertical: wp(5),
    paddingHorizontal: 13,
    fontSize: 18,
    opacity: 0.5,
  },
});

export default Timing;
