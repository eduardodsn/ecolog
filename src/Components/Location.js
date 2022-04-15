import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import CreatePoint from '../Screens/CreatePoint'
import PickLocation from '../Screens/PickLocation'

const Stack = createStackNavigator();

export default function Location() {
    return (
        <Stack.Navigator initialRouteName='CreatePoint'  screenOptions={{headerShown: false}}>
            <Stack.Screen name="CreatePoint" component={CreatePoint} />
            <Stack.Screen name="PickLocation" component={PickLocation} />
        </Stack.Navigator>
    );
}