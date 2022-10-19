import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OnBoarding from '../screens/OnBoarding';
import SplashScreen from '../screens/SplashScreen';
import SignUpSignIn from '../screens/SignUpSignIn';
import HomeScreen from '../screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyDrawer() {
  return (
    // <View
    // style={{flex: 1}}
    // testID={'4#1'}
    // nativeID={'hansel_ignore_view_overlay'}>
      
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
      
        // </View>
        
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: 'grey',
        // width: 240,
      },
    }}
    >
      <Tab.Screen name="SignUpSignIn" component={SignUpSignIn} />
      <Tab.Screen name="OnBoarding" component={OnBoarding} />
    </Tab.Navigator>
  );
}


const AppNavigator = () => {
  return (
  <SafeAreaProvider >
    <View style={{flex:1}} testID={'0#1'} nativeID = {'hansel_ignore_view_overlay'}> 

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS
        }}
        animation="fade"
        >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="HomeScreen" component={MyDrawer} />

        <Stack.Screen name="SignUpSignIn" component={SignUpSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
    {/* <View style = {{flex:1, backgroundColor:'grey'}}></View> */}
    </View>
    </SafeAreaProvider>
  
  );
};

export default AppNavigator;
