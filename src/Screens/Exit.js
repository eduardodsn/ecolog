import React from 'react';
import { View } from 'react-native';

export default function Exit({ navigation }) {
    return <>
        {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
        }
    </>
}
