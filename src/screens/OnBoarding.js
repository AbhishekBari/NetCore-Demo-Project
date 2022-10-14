import {View, Text, Image, NativeModules} from 'react-native';
import React from 'react';
import scale, {height, width} from '../assets/Scale';
import HeaderComponent from '../components/Header/HeaderComponent';
import {images} from '../assets/ImagesURI';
import ButtonComponent from '../components/Button/ButtonComponent';
import Input from '../components/TextInput/Input';
// import SmartechBaseReact from('smartech-base-react-native');


const OnBoarding = ({navigation}) => {
 
  const eventName = "homeScreen"
  const properties = {}

  const SmartechAppInboxReact = require('smartech-appinbox-react-native');
  
  const sendEvent = () => {
    NativeModules.HanselTrackerRn.logEvent(eventName,"fbs",properties,(hanselData) => {
      if(!properties) {properties = {};} 
      mergedProperties = Object.assign(properties, hanselData); 

     
  
  }); 
  }

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <HeaderComponent
        title={'Create Profile'}
        titleStyle={{color: '#FFFFFF', fontSize: scale(26), fontWeight: '700'}}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          borderTopWidth: 1,
          borderColor: '#707070',
        }}>
        <View
          style={{
            height: height * 0.68,
            width: width,
            backgroundColor: 'black',
            marginTop: height * 0.07,
            alignItems: 'center',
          }}>
          <Image
            source={images.Guard}
            style={{width: width * 0.4, height: '100%'}}
          />
          {/* <Input placeholder={'Email'} 
            placeholderTextColor={'grey'}
          /> */}
        </View>
        
        <View style={{height:height * 0.24, width:width, backgroundColor:'black', alignItems:'center', justifyContent:'center'}}>
          <ButtonComponent title={'Lets Begin'} onClick={() =>  {  navigation.navigate('SignUpSignIn'), sendEvent()   }}
          // NativeModules.HanselTrackerRn.logEvent(eventName,"fbs",properties,(hanselData)
          />
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

