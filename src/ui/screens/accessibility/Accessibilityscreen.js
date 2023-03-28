import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Accessibilityscreen = () => {
  return (
    <View>
      <View accessible={true}>
        <Text style={styles.txt}>text one</Text>
        <Text style={styles.txt}>text two</Text>
      </View>
    </View>
  );
};

export default Accessibilityscreen;

const styles = StyleSheet.create({
  txt: {
    color: 'black',
  },
});
