import React, {useState} from 'react';
import {View, Text, Card, ScrollView} from 'native-base';
import {Colors, hp, wp} from '../../../utils';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  validationemail, 
  validationname,
  isEmpty,
} from '../../../utils/Validation';

export default Createaccount = () => {
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');

  const onvalid = async val => {
    var testemail = await validationemail(val);
    // var testname = await validationname(name)
    // if (testname) {
    if (testemail) {
      setEmail('Account created successfully');
    } else {
      setEmail('invalidemail');
    }
    // } else alert('enter proper name');
  };
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.txt1} fontSize="30">
              Create Account
            </Text>
            <Text style={styles.txt2}>
              Confirm your countary code and enter your phone
            </Text>
            <Card style={styles.card}>
              <TextInput
                style={styles.inputtxt}
                placeholderTextColor={'grey'}
                placeholder="Full Name"
              />
            </Card>

            <Card style={styles.card}>
              <TextInput
                style={styles.inputtxt}
                placeholderTextColor={'grey'}
                placeholder="Email"
                onChangeText={val => {
                  onvalid(val);
                }}
              />
            </Card>
            <Text>{email}</Text>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate('Booking')}>
              <Text style={styles.touchtxt}>LET'S START</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate('Listscreen')}>
              <Text style={styles.touchtxt}>LET'S load</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate('Anotherscreen')}>
              <Text style={styles.touchtxt}>LET'S load Modal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate('Imagescreen')}>
              <Text style={styles.touchtxt}>Images</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt1: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: wp(4),
  },
  txt2: {
    color: Colors.grey,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: wp(20),
    marginBottom: hp(2),
    opacity: 0.8,
  },
  card: {
    width: wp(90),
    alignSelf: 'center',
  },
  inputtxt: {
    color: Colors.black,
    opacity: 0.8,
  },
  touch: {
    backgroundColor: '#3A67D7',
    width: wp(88),
    height: hp(6),
    marginVertical: hp(3),
    opacity: 0.8,
    alignSelf: 'center',
    borderRadius: 5,
  },
  touchtxt: {
    textAlign: 'center',
    marginVertical: hp(2),
    fontSize: 15,
    color: Colors.white,
  },
});
