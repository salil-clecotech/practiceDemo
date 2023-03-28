import React, {useState} from 'react';
import {Card, View, Text, FlatList} from 'native-base';
import {useSelector} from 'react-redux';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {wp, hp} from '../../../../utils';

const Service = ({onsetselectservice}) => {
  const {service} = useSelector(state => state.appoinment);

  const arr = [
    {id: 1, title: 'Consultant'},
    {id: 2, title: 'Toothpain'},
    {id: 3, title: 'Cleaning'},
    {id: 4, title: 'Brases'},
    {id: 5, title: 'Dental Implant'},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NOW WE MAY HELP</Text>

      <FlatList
        style={{flex: 1}}
        data={arr}
        keyExtractor={element => element.id.toString()}
        numColumns={2}
        renderItem={element => {
          return (
            <TouchableOpacity
              onPress={() => onsetselectservice(element.item.title)}
              style={[styles.containerbox]}>
              <View
                style={[
                  styles.box,
                  {
                    backgroundColor:
                      service === element.item.title ? 'blue' : 'white',
                  },
                ]}>
                <Text style={styles.boxtext}>{element.item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        //  renderItem={(element,index)=>{
        //     return(
        //     <View style={[styles.box,{marginRight:index%2==0?10:0,marginLeft:index%2==0?0:10}]} p={0}><Text style={styles.boxtext}>{element.item.title}</Text></View>
        // )}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"red",
    height: hp('60%'),
    width: wp('90%'),
    alignSelf: 'center',
  },
  text: {
    color: 'grey',
    paddingHorizontal: 13,
    marginVertical: wp(1),
  },
  box: {
    // backgroundColor:"pink",
    // textAlign:"center",
    borderRadius: 10,
    borderWidth: 1,
    // alignSelf:"center",
    borderColor: 'grey',
    height: hp('15%'),

    marginVertical: wp(2),
    // paddingHorizontal:0
    marginHorizontal: wp(2),
  },
  containerbox: {
    width: wp(45),
    // backgroundColor:'green'
  },
  boxtext: {
    textAlign: 'center',
    marginVertical: 50,
    color: 'grey',
    borderColor: 'grey',
  },
});

export default Service;
