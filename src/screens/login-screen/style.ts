import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    userNameContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    userNameTextStyle: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
        paddingBottom: 4
    },
    textInputStyle: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        color: 'black',
        borderColor: 'grey'
    },
    passwordTextStyle: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
        paddingBottom: 4
    },
    buttonContainerStyle: {
        alignItems: 'center',
        paddingVertical: 32,
    },
    buttonStyle: {
        height: 48,
        width: '80%',
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 16,
        backgroundColor: '#0070ad',
        borderColor: '#0070ad'
    },
    disabledButton: {
        height: 48,
        width: '80%',
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 16,
        backgroundColor: '#0070ad',
        borderColor: '#0070ad',
        opacity: 0.3
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
    containerStyle: {
        flex: 0.9,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderColor: 'red'
    },
    checkBoxStyle: {
        height: 20, 
        width: 16, 
        borderWidth: 2, 
        borderColor: 'black', 
        marginHorizontal: 8
    },
    checkBoxTickStyle: {
        fontSize: 14, 
        fontWeight: '600', 
        color: 'white'
    },
    rememberMeTextStyle: {
        fontSize: 14, 
        fontWeight: '600', 
        color: 'black' 
    },
    checkBoxContainer: {
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
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
});