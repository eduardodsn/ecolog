import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native';

import Location from '../Components/Location'
import Dashboard from '../Screens/Dashboard'
import FindPoint from '../Screens/FindPoint'
import CreatePoint from '../Screens/CreatePoint'
import Information from '../Screens/Informations/Information'
import Exit from '../Screens/Exit'


const { Navigator, Screen } = createBottomTabNavigator();

export default function Navbar({ navigation }) {
    const route = useRoute();
    const token = route.params.token;

    
    return (
        <Navigator 
            initialRouteName='Dashboard'
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === 'Dashboard') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline'
                    } else if (routeName === 'Information') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                    } else if (routeName === 'Exit') {
                        iconName = focused ? 'ios-exit' : 'ios-exit-outline'
                    } else if (routeName === 'FindPoint') {
                        iconName = focused ? 'ios-map' : 'ios-map-outline'
                    } else if (routeName === 'Location') {
                        iconName = focused ? 'ios-add' : 'ios-add'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })}>
            <Screen name='Dashboard' component={Dashboard} options={{ headerShown: false, tabBarShowLabel: false }} initialParams={{token}}/>
            <Screen name='FindPoint' component={FindPoint} options={{ headerShown: false, tabBarShowLabel: false }} initialParams={{token}}/>
            <Screen name='Location' component={Location} options={{ headerShown: false, tabBarShowLabel: false }} initialParams={{token}}/>
            <Screen name='Information' component={Information} options={{ headerShown: false, tabBarShowLabel: false }} initialParams={{token}}/>
            <Screen name='Exit' component={Exit} options={{ headerShown: false, tabBarShowLabel: false }}/>
        </Navigator>
    );
}