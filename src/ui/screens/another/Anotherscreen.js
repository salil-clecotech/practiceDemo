import {View, StyleSheet, Image} from 'react-native';
import {useState} from 'react';
import {Button, Card, Modal, VStack, Text} from 'native-base';
import React from 'react';
import {IconAsset, wp, hp} from '../../../../utils';
import {HStack} from 'native-base';
import {Switch} from 'native-base';

const Anotherscreen = () => {
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <Card style={styles.container}>
      {/* <HStack style={styles.container1}>
        <HStack style={styles.container2}>
          <Image source={IconAsset.team} style={styles.img} />
          <VStack>
            <Text style={styles.Passionatetext}>Passionate</Text>
            <Text style={styles.joetxt}>Joe Bloggs</Text>
          </VStack>
        </HStack>
        <Text style={styles.hr22}>22hr</Text>
      </HStack>
      <Image source={IconAsset.teams} style={styles.img1} />
      <VStack>
        <Text style={styles.bttmtxt}>
          Thank you so much for the help with the project, you always do your
          best to support!!
        </Text>
        <Text style={styles.fromtxt}>From Richard Bloggs</Text>
      </VStack>
      <HStack>
        <HStack>
          <Image source={IconAsset.teams} style={styles.img} />
          <Text style={styles.notxt}>3</Text>
        </HStack>
        <HStack>
          <Image source={IconAsset.teams} style={styles.img} />
          <Text style={styles.notxt}>6</Text>
        </HStack>
      </HStack> */}
      <Modal isOpen={modalvisible} onClose={() => setModalvisible(false)}>
        <VStack style={styles.modalcard}>
          <Modal.Header style={styles.modalhead}>
            <Text textAlign="center" fontSize={20} color="white">
              Filter
            </Text>
          </Modal.Header>
          <VStack>
            <HStack style={styles.modalbody}>
              <Text fontSize={17}>Received</Text>
              <Switch />
            </HStack>
            <HStack style={styles.modalbody}>
              <Text fontSize={17}>Sent</Text>
              <Switch />
            </HStack>
            <HStack style={styles.modalbody}>
              <Text fontSize={17}>Group : Corporate</Text>
              <Switch />
            </HStack>
          </VStack>
          <Button
            onPress={() => setModalvisible(false)}
            style={styles.modalbtn}>
            OK
          </Button>
        </VStack>
      </Modal>

      <Button
        onPress={() => {
          setModalvisible(!modalvisible);
        }}>
        Open Modal
      </Button>
    </Card>
  );
};

export default Anotherscreen;

const styles = StyleSheet.create({
  container1: {
    justifyContent: 'space-between',
    height: hp(13),
  },
  container2: {
    justifyContent: 'space-between',
    height: hp(13),
  },
  img: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(9),
    marginHorizontal: wp(3),
  },
  Passionatetext: {
    color: '#49AAB9',
    fontSize: 30,
    fontWeight: 'bold',
  },
  joetxt: {
    color: '#202F3A',
    fontSize: 20,
  },
  hr22: {
    color: '#202F3A',
    fontSize: 18,
  },
  img1: {
    width: '100%',
    height: wp(80),
  },
  bttmtxt: {
    color: '#202F3A',
    fontSize: 18,
    paddingHorizontal: wp(4),
    textAlign: 'justify',
    marginTop: hp(4),
  },
  fromtxt: {
    color: '#49AAB9',
    fontSize: 22,
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  notxt: {
    color: '#202F3A',
    fontSize: 20,
    textAlignVertical: 'center',
  },
  modalcard: {
    width: wp(70),
    height: hp(28),
    backgroundColor: 'pink',
    borderRadius: 20,
  },
  modalbtn: {
    backgroundColor: 'teal',
    width: wp(50),
    height: hp(5),
    alignSelf: 'center',
    borderRadius: 30,
    marginVertical: hp(2.5),
  },
  modalhead: {
    backgroundColor: 'teal',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalbody: {
    justifyContent: 'space-between',
    paddingHorizontal: wp(1.5),
    marginTop: hp(0.5),
  },
});
