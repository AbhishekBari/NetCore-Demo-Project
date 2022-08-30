import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OnBoarding from '../screens/OnBoarding';
import SplashScreen from '../screens/SplashScreen';
import SignUpSignIn from '../screens/SignUpSignIn';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <View
    style={{flex: 1}}
    testID={'4#1'}
    nativeID={'hansel_ignore_view_overlay'}>
      
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: 'grey',
              // width: 240,
            },
          }}>
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="SignUpSignIn" component={SignUpSignIn} />
          <Drawer.Screen name="OnBoarding" component={OnBoarding} />
        </Drawer.Navigator>
        {/* </NavigationContainer> */}
        </View>
        
  );
}

const AppNavigator = () => {
  return (
  
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="HomeScreen" component={MyDrawer} />
        
        <Stack.Screen name="SignUpSignIn" component={SignUpSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};

export default AppNavigator;
