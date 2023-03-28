import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomDropdown from '../../../components/Customdropdown';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Button, FlatList, Image} from 'native-base';
import {wp, IconAsset} from '../../../../utils';
import LocalString from '../../../components/LocalString';

const Language = () => {
  const [lanindex, setLanindex] = useState(0);
  const [wordindex, setWordindex] = useState('');
  const [changeword, onChangeword] = useState('');

  const arr = [
    {
      type: 'language',
      value: ['English', 'Hindi', 'Spanish', 'Russian', 'French'],
    },
    {
      type: 'Word',
      value: ['Hi', 'Welcome', 'Lunch', 'Goodmorning', 'Sleep'],
    },
  ];
  // ;
  const tranformarr = [
    {data: ['Hi', 'Welcome', 'Lunch', 'Goodmorning', 'Sleep']},
    {data: ['नमस्ते', 'स्वागत', 'दिन का खाना', 'शुभ प्रभात', 'सोना']},
    {data: ['hola', 'bienvenidas', 'comida', 'Buenos dias', 'Dormir']},
    {
      data: ['Здравствуй', 'Добро пожаловать', 'Обед', 'Доброе утро', 'Спать'],
    },
    {data: ['Salut', 'Bienvenue', 'Déjeuner', ' Bonjour', 'Dormir']},
  ];
  const transformword = () => {
    console.log(lanindex, wordindex, 'ttttt');
    console.log(tranformarr[lanindex].data[wordindex], 'LANGIGEEEEE');
    onChangeword(tranformarr[lanindex].data[wordindex]);
  };
  return (
    <View style={{flex: 1}}>
      <SelectDropdown
        data={arr[0].value}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setLanindex(index);
        }}
        defaultValue="English"
        buttonStyle={{
          backgroundColor: 'teal',
          margin: wp(10),
          borderRadius: wp(2),
        }}
        defaultButtonText="Select Language"
        renderDropdownIcon={() => {
          return (
            <View>
              <Image source={IconAsset.next} alt="next" style={styles.next} />
            </View>
          );
        }}
      />
      <SelectDropdown
        data={arr[1].value}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setWordindex(index);
        }}
        defaultButtonText="Select Word"
        buttonStyle={{
          backgroundColor: 'teal',
          margin: wp(10),
          borderRadius: wp(2),
        }}
        renderDropdownIcon={() => {
          return (
            <View>
              <Image source={IconAsset.next} alt="next" style={styles.next} />
            </View>
          );
        }}
      />
      {/* <CustomDropdown /> */}
      <Button
        onPress={() => {
          transformword();
        }}>
        Change Word
      </Button>
      <Text style={{color: 'black'}}>{changeword}</Text>

      <LocalString />
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  next: {
    width: wp(5),
    height: wp(5),
  },
});
