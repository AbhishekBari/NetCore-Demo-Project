import React from "react";
import { View, TextInput,TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const Input = ({ style, placeholder, keyboardType, onChangeText, value, maxLength, multiline,
    autoCapitalize, autoCorrect, defaultValue, numberOfLines, onChange, placeholderTextColor, secureTextEntry,
    returnKeyType }) => {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={onChangeText}
                style={style}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                maxLength={maxLength}
                multiline={multiline}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                defaultValue={defaultValue}
                numberOfLines={numberOfLines}
                onChange={onChange}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                returnKeyType={returnKeyType}
                
            />
            <TouchableOpacity>
                
            </TouchableOpacity>
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
    container: { 
        
        justifyContent: 'center',
        width: DEVICE_WIDTH - 30,
        height: 45,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal:"5%"
    },
})