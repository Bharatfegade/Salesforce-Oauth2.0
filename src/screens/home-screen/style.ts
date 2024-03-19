import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    subTextStyle: {
        fontSize: 16, 
        color: 'black', 
        fontWeight: 'bold'
    },
    headingTextStyle: {
        fontSize: 20, 
        color: 'black', 
        fontWeight: 'bold'
    },
    textContainer: { 
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    buttonContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    buttonStyle: {
        height: 48,
        width: '80%',
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 16,
        backgroundColor: '#cf0a2c',
        borderColor: '#cf0a2c'
    },
    buttonTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    buttonTextStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    topNavStyle: {
        flex: 0.08, 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomWidth: 1, 
        paddingHorizontal: 16, 
        justifyContent: 'center', 
        borderColor: 'grey'
    },
    topNavTextStyle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'black' 
    }
})