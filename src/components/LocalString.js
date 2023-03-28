import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'native-base';
import SelectDropdown from 'react-native-select-dropdown';
import {IconAsset, wp, hp} from '../../utils';
// ES6 module syntax
import LocalizedStrings from 'react-native-localization';
import {Button} from 'native-base';
import {useState} from 'react';

const LocalString = () => {
  const arr = [
    {
      type: 'language',
      value: ['en-US', 'en', 'hi', 'it'],
    },
    {
      type: 'Word',
      value: ['how', 'boiledEgg', 'softBoiledEgg', 'choice'],
    },
  ];
  let strings = new LocalizedStrings({
    'en-US': {
      how: 'How do you want your egg today?',
      boiledEgg: 'Boiled egg',
      softBoiledEgg: 'Soft-boiled egg',
      choice: 'How to choose the egg',
    },
    en: {
      how: 'How  en',
      boiledEgg: 'Boiled egg en',
      softBoiledEgg: 'Soft-boiled egg en',
      choice: 'choice en',
    },
    hi: {
      how: 'How  hi',
      boiledEgg: 'Boiled egg hi',
      softBoiledEgg: 'Soft-boiled egg hi',
      choice: 'choice hi',
    },
    it: {
      how: 'How  it',
      boiledEgg: 'Boiled egg it',
      softBoiledEgg: 'Soft-boiled egg it',
      choice: 'choice it',
    },
  });
  const [selectedLang, onselectedLang] = useState('en');

  const [showWord, onshowWord] = useState(strings.how);
  const [selectedWord, onsetselectedWord] = useState('how');

  const changeword = selectWord => {
    strings.setLanguage(selectedLang);

    onshowWord(strings[selectWord]);
  };
  const _onSetLanguage = selectedLanguage => {
    onselectedLang(selectedLanguage);
    strings.setLanguage(selectedLanguage);
    onshowWord(strings[selectedWord]);
  };

  return (
    <View>
      <SelectDropdown
        data={arr[0].value}
        onSelect={(selectedItem, index) => {
          _onSetLanguage(selectedItem);
        }}
        defaultValue="en"
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
          onsetselectedWord(selectedItem);
          changeword(selectedItem);
        }}
        defaultValue="how"
        buttonStyle={{
          backgroundColor: 'teal',
          margin: wp(10),
          borderRadius: wp(2),
        }}
        defaultButtonText="Select Word"
        renderDropdownIcon={() => {
          return (
            <View>
              <Image source={IconAsset.next} alt="next" style={styles.next} />
            </View>
          );
        }}
      />
      <Text style={{color: 'black', textAlign: 'center'}}>{showWord}</Text>
      {/* <Button>Change Word</Button>
      <Text style={{color: 'black', textAlign: 'center'}}></Text> */}
    </View>
  );
};

export default LocalString;
const styles = StyleSheet.create({
  next: {
    width: wp(5),
    height: wp(5),
  },
});
