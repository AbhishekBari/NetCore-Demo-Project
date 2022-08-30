import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
  } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const ButtonComponent = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onClick()} disabled={props.value}>
            <View style={[styles.container,props.buttonStyle]}>
                <View>
                    <Text style={styles.homeText}>{props.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center', 
        justifyContent: 'center',
        width: DEVICE_WIDTH - 30,
        height: 45,
        alignSelf: 'center',
        backgroundColor: '#EC2102',
        borderRadius: 15
    },
    homeText: {
        color: 'white',
        fontSize: 18,
        fontWeight:'600'
    }
});
export default ButtonComponent;