import React from 'react';
import {Card} from 'native-base';
import {StyleSheet} from 'react-native';
import {IconAsset, Colors} from '../../../utils';
export default ApointmentBox = ({inneritem}) => {
  return <Card style={styles.container}>{inneritem}</Card>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    width: 360,
    alignSelf: 'center',
    height: 470,
  },
});
