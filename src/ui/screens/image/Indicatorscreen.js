import React, {useState, useRef} from 'react';
import {View, Text, Image} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {
  PagerDotIndicator,
  IndicatorViewPager,
} from '@shankarmorwal/rn-viewpager';
import {IconAsset} from '../../../../utils';

export default indicator = () => {
  const [arrindex, setarrIndex] = useState(0);
  const myref = useRef('myref');
  const arr = [
    {
      img: IconAsset.team,
      img: IconAsset.teams,
      img: IconAsset.profile,
    },
  ];
  const next = () => {
    if (arrindex < arr.length) {
      setarrIndex(arrindex + 1);
      myref.current.setPage(arrindex + 1);
    }
  };
  const back = () => {
    if (arrindex > 0) {
      setarrIndex(arrindex - 1);
      myref.current.setPage(arrindex - 1);
    }
  };

  const pagerdot = () => {
    return <PagerDotIndicator pageCount={3} />;
  };
  return (
    <IndicatorViewPager indicator={pagerdot} ref={myref}>
      {arr.map((e, i) => (
        <TouchableOpacity key={i}>
          <Image source={e.img} />
          <TouchableOpacity
            onPress={next}
            style={{
              position: 'absolute',
              bottom: 150,
              right: 10,
            }}>
            <Image source={IconAsset.next} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={back}
            style={{position: 'absolute', bottom: 150, left: 10}}>
            <Image source={IconAsset.back} />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </IndicatorViewPager>
  );
};
