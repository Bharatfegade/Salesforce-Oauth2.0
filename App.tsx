import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login-screen/login-screen';

const Stack = createNativeStackNavigator();

interface AppProps {
}
class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='DemoScreen' component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;