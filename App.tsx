import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login-screen/login-screen';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux/store';
import HomeScreen from './src/screens/home-screen/home-screen';

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
      <Provider store={store} children>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer children>
            <Stack.Navigator children screenOptions={{ headerShown: false }}>
              <Stack.Screen name='LoginScreen' component={LoginScreen} />
              <Stack.Screen name='HomeScreen' component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;