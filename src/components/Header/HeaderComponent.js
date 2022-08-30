import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image, 
    StatusBar
  } from 'react-native';

import {backArrow} from '../../assets/images';

const HeaderComponent = (props) => {
    return (
        <View style={styles.container}>
             <StatusBar
        animated={true}
        backgroundColor="black" />
            <TouchableOpacity 
                onPress={() => props.onClick ? props.onClick() : null} 
                style={styles.leftIconView}>
                <Image source={props.leftIcon} style={styles.leftIcon}/>
            </TouchableOpacity>
            <View style={styles.titleTextView}>
                <Text style={[styles.titleTextStyle,props.titleStyle]}>{props.title}</Text>
            </View>
            <View style={styles.leftIconView}>
                {
                    props.rightIcon? <Image source={props.rightIcon} style={styles.leftIcon} /> : null
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 50, 
        flexDirection: 'row', 
        backgroundColor: 'black'
    },
    leftIconView: {
        width: '15%', 
        height: '100%', 
        alignItems:'center', 
        justifyContent:'center'
    },
    titleTextView: {
        width: '70%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    leftIcon: {
        width:20, 
        height:20,
        tintColor: 'red'
    },
    titleTextStyle: {
        color: 'pink',
        fontSize: 18
    }
});
export default HeaderComponent;