import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, Text, View, TextInput, useIs } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import * as Location from 'expo-location';
import axios from 'axios';
const { REACT_APP_BACKEND_API_URL } = process.env;


export default function FindPoint({navigation, route}) {
    const isFocused = useIsFocused();
    const [points, setPoints] = useState(null);
    const [location, setLocation] = useState({});
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            setPoints(null)
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            await axios.get(`${REACT_APP_BACKEND_API_URL}/api/point`)
            .then(res => {
                setPoints(res.data.points)
            }).catch(err => console.log(err))
        })();
    }, [isFocused]);
    
    return <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Pontos de coleta</Text>
            <Text style={styles.description}>Pesquise pontos de coleta nas redondezas</Text>
        </View>
        <MapView
            style={styles.mapStyle}
            showsUserLocation={true}
            initialRegion={{
                latitude: location?.coords?.latitude || 37.78825,
                longitude: location?.coords?.longitude || -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            region={{
                latitude: location?.coords?.latitude || 37.78825,
                longitude: location?.coords?.longitude || -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>

            {
                points?.map((obj, key) => {
                    return (
                        obj.type === "random" ?
                        <Marker key={key}
                            coordinate={{
                                latitude: location?.coords?.latitude + obj?.latitudePlus,
                                longitude: location?.coords?.longitude + obj.longitudePlus,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            title={obj.name}
                            description={obj.description}
                        />
                        :
                        <Marker key={key}
                            coordinate={{
                                latitude: parseFloat(obj?.latitude),
                                longitude: parseFloat(obj?.longitude),
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            title={obj.name}
                            description={obj.description + ` - ${obj.activity === 'retirada' ? 'Retirada' : 'Coleta'}`}
                        />
                    )
                })
            }
        </MapView>
    </View>
}

const styles = StyleSheet.create({
    screenContainer: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    titleContainer: {
        width: Dimensions.get('window').width,
        height: '16%',
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        marginBottom: 10
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderColor: '#eee',
        borderRadius: 8,
        fontFamily: ''
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: '82%',
    }
});