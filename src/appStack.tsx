import {createStackNavigator} from '@react-navigation/stack';
import {ImageScreen} from './imageScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
