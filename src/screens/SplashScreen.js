import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';
import { images } from '../assets/ImagesURI';



const SplashScreen = ({navigation}) => {

useEffect(()=>{
   
    setTimeout(() => {
        navigation.navigate("OnBoarding")
    }, 3000);
},[])

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
     <Image source={images.Logo} style={{height:"50%",width:"100%"}}/>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});