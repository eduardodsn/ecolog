import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


//Telas
import ColorInfo from '../../Components/ColorInfo'
import GlassInfo from '../../Screens/Informations/GlassInfo'
import MetalInfo from '../../Screens/Informations/MetalInfo'
import OrganicInfo from '../../Screens/Informations/OrganicInfo'
import OtherInfo from '../../Screens/Informations/OtherInfo'
import PaperInfo from '../../Screens/Informations/PaperInfo'
import PlasticInfo from '../../Screens/Informations/PlasticInfo'


const { Navigator, Screen } = createStackNavigator();

export default function Information({ route }) {
    const token = route.params.token;


    return <>
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='ColorInfo' component={ColorInfo} initialParams={{token}} />
            <Screen name='GlassInfo' component={GlassInfo} />
            <Screen name='MetalInfo' component={MetalInfo} />
            <Screen name='OrganicInfo' component={OrganicInfo} />
            <Screen name='OtherInfo' component={OtherInfo} />
            <Screen name='PaperInfo' component={PaperInfo} />
            <Screen name='PlasticInfo' component={PlasticInfo} />
        </Navigator>
    </>
}