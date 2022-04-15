import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';

export default function PickLocation({navigation, route}) {
    const [loading, setLoading] = useState(true);
    const [markerLocation, setMarkerLocation] = useState({});
    const [markerLastLocation, setMarkerLastLocation] = useState({});
    const mapView = React.createRef();

    function handleString(string) {
        string = string.toString();
        string = string.split('.')
        string = string[0] + '.' + string[1].substr(0, 4);

        return string;
    }

    return <>
        <MapView
            style={styles.mapStyle}
            ref={mapView}
            showsUserLocation={true}
            followsUserLocation={true}
            onRegionChange={(region) => setMarkerLocation(region)}
            onRegionChangeComplete={(region) => setMarkerLastLocation(region)}
            initialRegion={{
                latitude: route.params.userLocation?.coords?.latitude || 37.78825,
                longitude: route.params.userLocation?.coords?.longitude || -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            >
            <Marker
                draggable={true}
                coordinate={{
                    latitude: markerLocation?.latitude || 37.78825,
                    longitude: markerLocation?.longitude || -122.4324,
                    latitudeDelta: 0.0070,
                    longitudeDelta: 0.0039,
                }}
            />
        </MapView>
        <View style={styles.titleContainer}>
            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => {
                    let latitude = markerLastLocation?.latitude;
                    let longitude = markerLastLocation?.longitude;
                    
                    latitude = handleString(latitude);
                    longitude = handleString(longitude);

                    route.params.setLocation({latitude: latitude, longitude: longitude});
                    navigation.goBack();
                }}
            >
                <Text style={styles.backText}>Definir localização</Text>
            </TouchableOpacity>
        </View>
    </>
}

const styles = StyleSheet.create({
    titleContainer: {
        height: '15%',
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        marginBottom: 20
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        marginBottom: 15,
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
        height: '85%'
    },
    backButton: {
        width: '80%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171F1D',
        borderRadius: 8,
    },
    backText: {
        color: 'white'
    }
});