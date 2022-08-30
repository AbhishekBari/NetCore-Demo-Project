// import { View, Text } from 'react-native'
// import React, {useState} from 'react';
// import scale, {height, width} from '../assets/Scale';
// import HeaderComponent from '../components/Header/HeaderComponent';
// import ButtonComponent from '../components/Button/ButtonComponent';
// import Input from '../components/TextInput/Input';
// import SearchList from '../components/List/SearchList';

// const VarifyScreen = ({route}) => {
//   return (
//     <View style={{flex: 1, backgroundColor: 'black'}}>
//       <HeaderComponent
//         title={'Home Screen'}
//         titleStyle={{color: '#FFFFFF', fontSize: scale(26), fontWeight: '700'}}
//         // rightIcon={info}
//       />
//       <View
//         style={{
//           height:'2%',
//           backgroundColor: 'black',
//           borderTopWidth: 1,
//           borderColor: '#707070',
//         }}>
     
//         <View
//           style={{
//             height: height * 0.68,
//             width: width,
//             backgroundColor: 'pink',
//             marginTop: height * 0.05,
//             alignItems: 'center',
//           }}>
//           {/* <View style={{height:'6%', width:'100%', backgroundColor:'black',paddingLeft:'4%'}}>
//           <Text style={{fontSize:14, color:"#FFFFFF"}} >Phone Number : {route.params?.number}</Text>
//           </View> */}
         
//           {/* <Input placeholder={'+91 | 999-999-0000'} 
//             placeholderTextColor={'grey'}
//             keyboardType={'numeric'}
//             style={{fontSize:15, color:'black'}}
//             maxLength={10}
//             onChangeText={
//               (value) => setTextInputPhone(value)
//             }
//           /> */}
//           <SearchList />
//         </View>
        
//         <View style={{height:height * 0.28, width:width, backgroundColor:'black', alignItems:'center', justifyContent:'center'}}>
//           <ButtonComponent title={'Submit'} onClick={() => {checkTextInput()} }/>
//         </View>
        
//       </View>
//     </View>
//   )
// }

// export default VarifyScreen


import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/Header/HeaderComponent'
import scale, {height, width} from '../assets/Scale';
import SearchList from '../components/List/SearchList'

const HomeScreen = ({route}) => {
  return (
    <View style={{backgroundColor:'black', flex: 1}}>
           <HeaderComponent
        title={'Home Screen'}
        titleStyle={{color: '#FFFFFF', fontSize: scale(26), fontWeight: '700'}}
        // rightIcon={info}
      />
       <Text style={{fontSize:14, color:"#FFFFFF", alignSelf:'center'}} >Phone Number: {route.params?.number} </Text>
      <SearchList />
    </View>
  )
}

export default HomeScreen;