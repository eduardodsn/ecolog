import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../Screens/LoginScreen'
import Navbar from '../Components/Navbar';

const Stack = createStackNavigator();

export default function MainScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'  screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Navbar" component={Navbar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}