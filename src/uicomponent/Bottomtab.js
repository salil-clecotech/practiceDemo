import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconAsset} from '../../utils';
import {Apointment, Createaccount} from '../ui';
const Tab = createBottomTabNavigator();

export default Bottomtab = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          height: 80,
        },
        unmountOnBlur: true,
        // tabBarHideOnKeyboard: true,
        // headerShown: true,
      }}>
      <Tab.Screen
        name="Summary"
        component={Summary}
        options={{
          tabBarIcon: ({}) => (
            <View style={styles.bottomtab}>
              <Image
                source={IconAsset.list}
                alt="pic"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text>Appointment</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Apointment"
        options={{
          tabBarIcon: ({}) => (
            <View
              style={{
                width: 55,
                height: 55,
                backgroundColor: 'blue',
                transform: [{rotate: '45deg'}],
                borderRadius: 5,
                position: 'absolute',
                bottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{transform: [{rotate: '45deg'}], fontSize: 44}}>
                +
              </Text>
            </View>
          ),
        }}
        component={Apointment}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.jumpTo('Apointment', {cIndex: 0});
          },
        })}
      />

      <Tab.Screen
        name="Createaccount"
        component={Createaccount}
        options={{
          tabBarIcon: ({}) => (
            <View style={styles.bottomtab}>
              <Image
                source={IconAsset.profile}
                alt="pic"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          ),
          tabBarLabelStyle: {paddingBottom: 8},
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomtab: {
    textAlign: 'center',
    alignItems: 'center',
    height: 20,
  },
});
