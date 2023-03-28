import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default SignUp = () => {
  const navigation = useNavigation();
  const onsignin = () => {
    navigation.navigate('SignIN');
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Container1}>
        <Text style={styles.Createacc}>Create Account</Text>
        <TextInput style={styles.input} placeholder="Enter Name" />
        <TextInput style={styles.input} placeholder="Enter Email" />
        <Text style={styles.agree}>I agree to the terms and condition </Text>
      </View>
      <View style={styles.Container2}>
        <Text style={styles.signbtn}>Sign UP</Text>
        <Text style={styles.signin}>Already have an acccount</Text>
        <TouchableOpacity>
          <Text style={styles.signin} onPress={onsignin}>
            Sign in from here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Createacc: {
    textAlign: 'center',
    color: '#3A67D7',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Container1: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 200,
  },
  input: {
    width: 300,
    textAlign: 'center',
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontSize: 20,
    borderColor: 'grey',
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  agree: {
    color: 'grey',
    textAlign: 'center',
  },
  Container2: {
    flex: 2,
    marginVertical: 30,
  },
  signbtn: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    width: 250,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 25,
    backgroundColor: '#3A67D7',
    color: 'white',
    borderRadius: 50,
  },
  signin: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
    marginTop: 5,
  },
});
