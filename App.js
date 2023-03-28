import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Service,
  Thanks,
  Summary,
  Apointment,
  Booking,
  Listscreen,
  Anotherscreen,
  Imagescreen,
  Productscreen,
  Productdetailscreen,
  Wishscreen,
  Cartscreen,
  Accessibilityscreen,
  Language,
  StorageScreen,
} from './src/ui';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import store from './redux-data/store';
import {Bottomtab} from './src/uicomponent';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Bottomtab">
      <Stack.Screen
        name="Bottomtab"
        component={Bottomtab}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Apointment"
        component={Apointment} 
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Thanks"
        component={Thanks}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Summary"
        component={Summary}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Listscreen"
        component={Listscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Anotherscreen"
        component={Anotherscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Imagescreen"
        component={Imagescreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Productscreen"
        component={Productscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Productdetailscreen"
        component={Productdetailscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wishscreen"
        component={Wishscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cartscreen"
        component={Cartscreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Accessibilityscreen"
        component={Accessibilityscreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="StorageScreen"
        component={StorageScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
