import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount === 0) {
          return 5;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text
        style={{
          fontSize: 96,
          textAlign: 'center',
          margin: 10,
          color: 'black',
        }}>
        {countdown}
      </Text>
    </View>
  );
}
export default App;
