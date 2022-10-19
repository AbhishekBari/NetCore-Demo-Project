import {View, Text, Image, KeyboardAvoidingView, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import scale, {height, width} from '../assets/Scale';
import HeaderComponent from '../components/Header/HeaderComponent';
import {images} from '../assets/ImagesURI';
import ButtonComponent from '../components/Button/ButtonComponent';
import Input from '../components/TextInput/Input';

const SignUpSignIn = ({navigation}) => {
  const [textInputPhone, setTextInputPhone] = useState('');
  const [url, setUrl] = useState('');

  console.log("url from deeplink" ,url);

  if(!url == "")
  {
    Linking.openURL(url)
  }


  const SmartechReact = require('smartech-base-react-native');
  const SmartPush = require('smartech-push-react-native');
  const Smartech = require('smartech-base-react-native');
  const SmartechAppInboxReact = require('smartech-appinbox-react-native');



  useEffect(() => {
    console.log('inside the useEffect');
    SmartPush.addListener(Smartech.SmartPushDeeplinkNotification, handleDeeplinkWithPayload);
    SmartPush.getDeepLinkUrl(function (_response) 
    {  console.log('getDeepLinkUrl Initial Deeplink Response ', _response.deeplink);
    setUrl(_response.deeplink);
      // Handling the SDK Deeplink Callback.  
     
      
    })
    const handleDeeplinkWithPayload = (deeplinkdata) => {  };
  },[]);

  // useEffect(() => {
  //   SmartechAppInboxReact.getAppInboxCategoryList((error, categoryList) => {
  //     let categoryListData = (Platform.OS === 'android') ? JSON.parse(categoryList) : categoryList
  //     console.log('category data', categoryList);
  //     console.log('category list data', categoryListData);
  // });
  // },[])

  // useEffect(() => {

  //   SmartechAppInboxReact.getAppInboxMessagesByApiCall(messageLimit,messageType,(Platform.OS === 'android') ? JSON.stringify(categoryList) : categoryList,(error, appInboxMessages) => {
       
  //   });

  //   SmartechAppInboxReact.getAppInboxMessages(messageType , (error, appInboxMessages) => {
  //     let appInboxData = (Platform.OS === 'android') ? JSON.parse(appInboxMessages) : appInboxMessages
  //     console.log('appInboxData data', appInboxMessages);
  //     console.log('appInboxData list data', appInboxData);
  // });
  // },[])

  
  

  const checkTextInput = () => {
    if (!textInputPhone.trim()) {
      alert('Please Enter Number');
      return;
    }
    // alert('Success')
    navigation.navigate({
      name: 'HomeScreen',
      params: { number : textInputPhone },
      merge: true,
    })
  }


  



  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <HeaderComponent
        title={'Sign Up/Login'}
        titleStyle={{color: '#FFFFFF', fontSize: scale(26), fontWeight: '700'}}
        // rightIcon={info}
      />
      <View
        style={{
          height:'2%',
          backgroundColor: 'black',
          borderTopWidth: 1,
          borderColor: '#707070',
        }}>
     
        <View
          style={{
            height: height * 0.68,
            width: width,
            backgroundColor: 'black',
            marginTop: height * 0.05,
            alignItems: 'center',
          }}>
          <View style={{height:'6%', width:'100%', backgroundColor:'black',paddingLeft:'4%'}}>
          <Text style={{fontSize:14, color:"#FFFFFF"}} >Phone Number</Text>
          </View>
         
          <Input placeholder={'+91 | 999-999-0000'} 
            placeholderTextColor={'grey'}
            keyboardType={'numeric'}
            style={{fontSize:15, color:'black'}}
            maxLength={10}
            onChangeText={
              (value) => setTextInputPhone(value)
            }
          />
        </View>
        
        <View style={{height:height * 0.28, width:width, backgroundColor:'black', alignItems:'center', justifyContent:'center'}}>
          <ButtonComponent title={'Submit'} onClick={() => {checkTextInput()} }/>
        </View>
        
      </View>
    </View>
  );
};

export default SignUpSignIn;
