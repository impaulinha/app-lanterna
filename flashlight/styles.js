import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLight: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lightingOn: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 150,
        height: 150
    },
    lightingOff: {
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white',
        width: 150,
        height: 150
    },
    dioLogo: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 250,
        height: 250
    }
});