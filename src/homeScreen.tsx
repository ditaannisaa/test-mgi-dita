import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {ImageScreen} from './imageScreen';

export const Home = ({navigation}: any) => {
  const [countdown, setCountdown] = useState(5);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCountdown(prevCount => {
  //         if (prevCount === 0) {
  //           return 5;
  //         }
  //         return prevCount - 1;
  //       });
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      {/* <Text
        style={{
          fontSize: 96,
          textAlign: 'center',
          color: 'black',
        }}>
        {countdown}
      </Text> */}
      <ImageScreen />
    </View>
  );
};
