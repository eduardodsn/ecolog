import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import * as AuthSession from 'expo-auth-session'
const { CLIENT_ID } = process.env;
const { REDIRECT_URL } = process.env;


//Imagens
import LoginImage from '../../assets/images/first-screen.png'
import GoogleIcon from '../../assets/images/google.png'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoginScreen({ navigation }) {

    async function handleSignIn() {
        const RESPONSE_TYPE = 'token';
        const SCOPE = encodeURI('profile email');

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
        const response = await AuthSession.startAsync({ authUrl })

        if(response?.type === 'success') {
            navigation.navigate('Navbar', { token: response.params.access_token })
        }
    }

    return <View style={styles.container}>
        <Image source={LoginImage} style={styles.image} />
        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
            <Image source={GoogleIcon} style={styles.gImage} />
            <Text style={styles.loginButtonTitle}>Fazer login com Google</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A5F7A',
        alignItems: 'center'
    },
    image: {
        width: windowWidth,
        height: windowHeight,
        zIndex: -1
    },
    loginButton: {
        width: '85%',
        marginTop: -120,
        paddingVertical: 13,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gImage: {
        width: 30,
        height: 30,
        marginRight: 20
    },
    loginButtonTitle: {
        color: '#878787',
        textAlign: 'center',
        fontFamily: 'Roboto_500Medium',
        fontSize: 18
    }
});