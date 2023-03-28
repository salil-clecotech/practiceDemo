import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Image, Text, Modal, Button, HStack} from 'native-base';
import {StyleSheet} from 'react-native';
import {wp, hp} from '../../../../utils';
import IconAsset from '../../../../utils/IconAsset';
import AppIntroSlider from 'react-native-app-intro-slider';
// import {
//   IndicatorViewPager,
//   PagerDotIndicator,
//   ViewPager,
// } from '@shankarmorwal/rn-viewpager';
export default Imagescreen = () => {
  const myref = React.useRef('myref');

  // console.log(myref, 'myref');
  const [modalvisible, onsetModalvisible] = useState(false);

  const slides = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: IconAsset.profile,
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: IconAsset.teams,
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: IconAsset.team,
      backgroundColor: '#22bcb5',
    },
  ];

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image
          source={IconAsset.next}
          alt="next"
          // color="rgba(255, 255, 255, .9)"
          size={4}
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image
          source={IconAsset.back}
          alt="back"
          // color="rgba(255, 255, 255, .9)"
          size={4}
        />
      </View>
    );
  };
  const test = index => {
    onsetModalvisible(true);
    console.log(index, myref);
    setTimeout(() => {
      myref.current?.goToSlide(index);
    }, 100);
  };

  const AppSlider = React.forwardRef(({isClickable, text, title}, ref) => (
    <AppIntroSlider
      ref={ref}
      style={styles.appIntroSlider}
      data={slides}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderItem={({item, index}) => {
        return (
          <View>
            <Text style={{color: 'black'}}>{title ? item.title : null}</Text>
            <TouchableOpacity
              onPress={() => (isClickable ? test(index) : null)}>
              <Image source={item.image} alt="slides image" />
            </TouchableOpacity>
            <Text style={{color: 'black'}}>{text ? item.text : null}</Text>
          </View>
        );
      }}
    />
  ));

  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <AppSlider isClickable={true} title={true} text={true} ref={null} />
      <Modal isOpen={modalvisible} onClose={() => onsetModalvisible(false)}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 400,
            width: '100%',
            marginTop: 40,
          }}
          onPress={() => onsetModalvisible(false)}>
          <AppSlider
            isClickable={false}
            title={false}
            text={false}
            ref={myref}
          />
          <Image
            source={IconAsset.team}
            style={{width: 50, height: 50}}
            alt="team"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Modal>
      <View style={{flex: 1, backgroundColor: 'pink'}} />
    </View>
    // <View style={{flex: 1}}>
    // {/* <TempC isClickable={true} /> */}
    //  {/* <Modal isOpen={modalvisible} onClose={() => onsetModalvisible(false)}>
    //   <View style={styles.modalContainer}>
    //     <TouchableOpacity
    //       style={{
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         justifyContent: 'flex-end',
    //         height: 40,
    //         width: '100%',
    //         marginTop: 40,
    //       }}
    //       onPress={() => onsetModalvisible(false)}>
    //       <Image
    //         source={IconAsset.team}
    //         style={{width: 50, height: 50}}
    //         alt="team"
    //         resizeMode="contain"
    //       />
    //     </TouchableOpacity>
    //     <TempC isClickable={false} touch={false} />
    //   </View>
    // </Modal> */}
    // </View>
  );
};

const styles = StyleSheet.create({
  appIntroSlider: {
    flex: 1,

    backgroundColor: 'yellow',
  },
  closeButton: {
    marginBottom: 40,
    marginBottom: 6,
    paddingBottom: 10,
    backgroundColor: 'red',
  },
  modalcontainer: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'red',
  },
  modalimg: {width: '100%', height: 200, backgroundColor: 'green'},
  text: {
    textAlign: 'center',
  },
  btn: {
    justifyContent: 'space-between',
  },
  arrimages: {
    //position: 'relative',
    height: wp(80),
    width: wp(100),
    //top: 7,
    // left: 5,
  },
  next: {
    width: wp(8),
    height: wp(8),
  },
  back: {
    width: wp(8),
    height: wp(8),
  },
  modalContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
  },
});
// const [indexarr, onSetindex] = useState(0);
// const arr = [ onPress={imageopen}
//   {img: IconAsset.team},
//   {img: IconAsset.profile},
//   {img: IconAsset.team},
// ];
// const next = () => {
//   // console.log(indexarr);
//   // console.log(myref.current);
//   if (indexarr < arr.length) {
//     onSetindex(indexarr + 1);
//     myref.current.setPage(indexarr + 1);
//   }
// };
// const back = () => {
//   if (indexarr > 0) {
//     onSetindex(indexarr - 1);
//     myref.current.setPage(indexarr - 1);
//   }
// };
// const _renderDotIndicator = () => {
//   return <PagerDotIndicator pageCount={3} />;
// };
// const TempC = ({isClickable}) => {
//   return (
//     <IndicatorViewPager
//       indicator={_renderDotIndicator()}
//       style={styles.modalimg}
//       ref={myref}>
//       {arr.map((item, index) => {
//         return (
//           <TouchableOpacity
//             disabled={true}
//             key={index}
//             onPress={() => {
//               alert('test');
//               //  isClickable ? onsetModalvisible(true) : null;
//             }}
//             style={{backgroundColor: 'red'}}>
//             <Image
//               source={item.img}
//               alt="arrimages"
//               style={styles.arrimages}
//             />
//             {/* <TouchableOpacity
//               onPress={next}
//               style={{
//                 backgroundColor: 'red',
//                 position: 'absolute',
//                 bottom: 150,
//                 right: 10,
//               }}>
//               <Image source={IconAsset.next} style={styles.next} alt="icon" />
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={back}
//               style={{position: 'absolute', bottom: 150, left: 10}}>
//               <Image source={IconAsset.back} style={styles.back} alt="icon" />
//             </TouchableOpacity> */}
//           </TouchableOpacity>
//         );
//       })}
//     </IndicatorViewPager>
//   );
// };
