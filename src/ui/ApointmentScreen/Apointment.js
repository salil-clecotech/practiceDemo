import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ApointmentBox from './ApointmentBox';
import ApointmentBtn from './ApointmentBtn';
import ApointmentText from './ApointmentText';
import {useNavigation} from '@react-navigation/native';
import {Service, Timing, AppoinmentC, Insurance} from '../index';
import {Bottomtab} from './src/uicomponent';
import {useSelector, useDispatch} from 'react-redux';
import {
  onselectdoctor,
  onselectservice,
  onselecttiming,
  onselectinsurance,
} from '../../../redux-data/Slices/Appointmentslice';
export default Apointment = props => {
  const dispatch = useDispatch();
  const {doctor, service, timing} = useSelector(state => state.appoinment);
  // useEffect(() => {
  //   if (currentindex == 4) {
  //     onsetcurrentIndex(0);
  //   }
  // }, [currentindex]);
  const [currentindex, onsetcurrentIndex] = useState(0);
  const navigation = useNavigation();
  const arr = [
    {
      heading: 'Book Appoinment',
      subheading: 'Book Appointment in Smile',
      inneritem: (
        <AppoinmentC onsetselectdoctor={val => dispatch(onselectdoctor(val))} />
      ),
    },
    {
      heading: 'Book Appoinment',
      subheading: doctor,
      inneritem: (
        <Service onsetselectservice={val => dispatch(onselectservice(val))} />
      ),
    },
    {
      heading: 'Book Appoinment',
      subheading: doctor + ' >> ' + service,
      inneritem: (
        <Timing onsetselecttiming={val => dispatch(onselecttiming(val))} />
      ),
    },
    {
      heading: 'Book Appoinment',
      subheading: doctor + ' >> ' + service + ' >> ' + timing,
      inneritem: <Insurance />,
    },
  ];

  useEffect(() => {
    var cIndex = props.route.params?.cIndex;
    console.log(cIndex, 'currentIndexcurrentIndex');
    if (cIndex) {
      onsetcurrentIndex(cIndex);
    } else {
      onsetcurrentIndex(0);
    }
  }, [props]);
  const onPressNextbtn = () => {
    if (currentindex <= 2) {
      if (currentindex == 0) {
        if (doctor) {
          goToNext();
        } else {
          alert('Select Doctor');
        }
      } else if (currentindex == 1) {
        if (service) {
          goToNext();
        } else {
          alert('Select Service');
        }
      } else if (currentindex == 2) {
        if (timing) {
          goToNext();
        } else {
          alert('Select time');
        }
      }
    } else {
      navigation.navigate('Thanks');
    }
  };
  const goToNext = () => {
    onsetcurrentIndex(currentindex <= 2 ? currentindex + 1 : currentindex);
  };
  return (
    <View>
      <View>
        <ApointmentText
          heading={arr[currentindex].heading}
          subheading={arr[currentindex].subheading}
        />
        <ApointmentBox inneritem={arr[currentindex].inneritem} />
        <ApointmentBtn
          onPressNextbtn={onPressNextbtn}
          onPressBackbtn={() => {
            onsetcurrentIndex(
              currentindex > 0 ? currentindex - 1 : currentindex,
            );
          }}
        />
      </View>
    </View>
  );
};
