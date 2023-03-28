import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FlatList, HStack, Image, VStack, Input} from 'native-base';
import {IconAsset, wp, hp} from '../../utils';
const CustomDropdown = () => {
  const [currindex, setCurrindex] = useState('');
  const [lan, onSetlan] = useState('');
  const [words, onSetwords] = useState('');

  const arr = [
    {
      type: 'language',
      value: ['Hindi', 'English', 'Spanish', 'Russian', 'French'],
    },
    {type: 'Word', value: ['Hi', 'Welcome', 'Lunch', 'Goodmorning', 'Sleep']},
  ];
  const onsetdropdown = index => {
    setCurrindex(index);
  };

  const Dropdown = () => {
    return (
      <View>
        {currindex === '' ? null : (
          <View>
            <FlatList
              data={arr[currindex].value}
              keyExtractor={(index, item) => index.toString()}
              renderItem={({item, index}) => (
                <VStack key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      if (index === 0) {
                        onSetlan(item);
                      }
                      if (index === 1) {
                        onSetwords(item);
                      }
                    }}>
                    <Text style={{color: 'black', fontSize: 20}}>{item}</Text>
                  </TouchableOpacity>
                </VStack>
              )}
            />
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 20, color: 'black'}}>
        {lan} && {words}
      </Text>
      <FlatList
        data={arr}
        keyExtractor={(index, item) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.dropdown} key={index}>
            <HStack style={styles.hz}>
              <Text style={{fontSize: 20}}>Select{item.type}</Text>
              {/* {language === '' ? null : <Text>{language}</Text>} */}
              <TouchableOpacity
                onPress={() => {
                  onsetdropdown(currindex === index ? '' : index);
                }}>
                <Image source={IconAsset.back} alt="back" style={styles.back} />
              </TouchableOpacity>
            </HStack>
            {currindex === index ? <Dropdown /> : null}
          </View>
        )}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    width: wp(80),
    height: hp(8),
    alignSelf: 'center',
    backgroundColor: 'pink',
    marginVertical: wp(10),
    borderRadius: 20,
  },
  hz: {
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginVertical: wp(5),
  },
  back: {
    width: wp(5),
    height: wp(5),
  },
});
