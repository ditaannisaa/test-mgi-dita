import React from 'react';
import {Home} from './src/homeScreen';
import {View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <Home />
      </View>
    </QueryClientProvider>
  );
}
export default App;
