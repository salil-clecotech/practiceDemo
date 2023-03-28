import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../utils';

export default ApointmentText = ({heading, subheading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text1}>{heading}</Text>
      <Text style={styles.Text2}>{subheading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, marginVertical: 10},
  Text1: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  Text2: {
    color: Colors.grey,
    fontSize: 15,
  },
});
