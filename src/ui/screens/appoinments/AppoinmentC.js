import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HStack, Image, Checkbox, VStack} from 'native-base';
import {useSelector} from 'react-redux';
const AppoinmentC = ({onsetselectdoctor}) => {
  const {doctor} = useSelector(state => state.appoinment);
  const Data = [
    {
      Checkbox: false,
      image: IconAsset.teams,
      name: 'Erick Su',
      title: 'dentist-orthadontist',
    },
    {
      Checkbox: false,
      image: IconAsset.team,
      name: 'Alberto Silva',
      title: 'dentist-orthadontist',
    },
    {
      Checkbox: false,
      image: IconAsset.teams,
      name: 'Jesse Brown',
      title: 'dentist-orthadontist',
    },
    {Checkbox: false, image: null, name: 'Any'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.select}>SELECT DENTIST</Text>
      {Data.map(ele => (
        <HStack
          style={styles.box}
          alignItems="center"
          justifyContent="space-between">
          <HStack>
            <Checkbox
              isChecked={doctor === ele.name}
              // value={ele.Checkbox}
              w={30}
              h={30}
              borderRadius={15}
              onChange={() => onsetselectdoctor(ele.name)}
            />
            <Image
              source={ele.image}
              width="10"
              height="10"
              alt="pic"
              mx={4}
              style={{borderRadius: 10}}
            />

            <VStack>
              <Text style={styles.name}>{ele.name}</Text>
              <Text style={styles.title}>{ele.title}</Text>
            </VStack>
          </HStack>

          <Image source={ele.image} width="10" height="10" alt="pic" />
        </HStack>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    width: 360,
    alignSelf: 'center',
    height: 470,
  },
  select: {
    color: Colors.grey,
  },
  box: {
    flex: 1,
  },
  name: {
    color: Colors.black,
    fontSize: 17,
    fontWeight: 'bolder',
  },
  title: {
    color: Colors.grey,
    fontSize: 13,
  },
});
export default AppoinmentC;
