import { Dimensions } from "react-native";

//Get device width and height
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

//Common strings used in app
export const UNAUTHORIZED_MESSAGE = "Authentication failure";