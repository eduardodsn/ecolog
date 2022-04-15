import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
const { REACT_APP_BACKEND_API_URL } = process.env;

import LoadingIcon from '../Components/LoadingIcon';


export default function FindPoint({navigation, route}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('coleta');
    const [location, setLocation] = useState({latitude: '', longitude: ''});
    const [displayLoading, setDisplayLoading] = useState('none');
    const [animateLoading, setAnimateLoading] = useState(false);

    async function pickLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let userLocation = await Location.getCurrentPositionAsync({});
        navigation.navigate('PickLocation', { setLocation: setLocation, userLocation: userLocation});
    }

    useEffect(() => {
        Alert.alert("Sobre o tipo de ponto", "Considere 'Coleta' como local para depósito de lixo reciclável e 'Retirada' como ponto para agendamento de retirada em determinado endereço.")
    }, [])

    function handleCreate() {
        if (name.trim().length < 6) {
            Alert.alert('Atenção', 'Nome do ponto deve ter pelo menos 6 caracteres!');
        } else if (type === undefined) {
            Alert.alert('Atenção', 'Tipo de ponto deve ser selecionado!');
        } else if (location?.latitude === "" && location?.longitude === "") {
            Alert.alert('Atenção', 'Localização do ponto deve ser definida!');
        } else if (description.trim().length < 8) {
            Alert.alert('Atenção', 'Descrição do ponto deve ter pelo menos 8 caracteres!');
        } else {
            setName('')
            setDescription('')
            setType('coleta')
            setLocation({latitude: '', longitude: ''})
            setDisplayLoading('flex');
            setAnimateLoading(true);
            axios({
                url: `${REACT_APP_BACKEND_API_URL}/api/point/create`,
                data: {
                    name: name,
                    description: description,
                    type: 'real',
                    latitude: location?.latitude,
                    longitude: location?.longitude,
                    activity: type
                },
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
            }).then((res) => {
                if(res.data.status === true) {
                    setTimeout(() => {
                        setDisplayLoading('none');
                        setAnimateLoading(false);
                        Alert.alert(
                            'Sucesso',
                            'Ponto criado com êxito, verifique no mapa!',
                            [
                              {
                                text: 'Ok',
                                onPress: () => navigation.navigate('Dashboard'),
                                style: 'default',
                              },
                        ])
                    }, 2000)
                } else {
                    Alert.alert('Erro', 'Algo de errado aconteceu ao criar novo ponto!');
                }
            })
        }
    }

    return <>
        <LoadingIcon display={displayLoading} isIconAnimating={animateLoading}/>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Adicionar Ponto</Text>
            <Text style={styles.title}>Coleta/Retirada</Text>
        </View>

        <View style={styles.formContainer}>
            <View>
                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Nome</Text>
                    <TextInput onChangeText={setName} value={name} style={styles.inputName}/>
                </View>
                <View style={[styles.input, styles.input2]}>
                    <Text style={styles.inputLabel}>Descrição</Text>
                    <TextInput onChangeText={setDescription} value={description} style={styles.inputName}/>
                </View>
                <View style={styles.selectContainer}>
                    <Text style={styles.inputLabel}>Tipo de ponto</Text>
                    <View style={styles.select}>
                        <TouchableOpacity 
                            onPress={() => setType('retirada')} 
                            style={[styles.touch, {backgroundColor: type === 'retirada' ? '#90C393' : '#bbd7bc'}, animateLoading === true ? {elevation: 0} : {elevation: 10}]}
                        >
                            <Text style={styles.touchText}>Retirada</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setType('coleta')} 
                            style={[styles.touch, {backgroundColor: type === 'coleta' ? '#90C393' : '#bbd7bc'}, animateLoading === true ? {elevation: 0} : {elevation: 10}]}
                        >
                            <Text style={styles.touchText}>Coleta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.pickLocationContainer0}>
                    <Text style={styles.inputLabel}>Localização</Text>
                    <View style={styles.pickLocationContainer}>
                        <View style={styles.locationContainer}>
                            <TextInput 
                                editable={false} 
                                value={`X: ${location?.latitude !== undefined ? location?.latitude : ''}`} 
                                numberOfLines={1} 
                                ellipsizeMode='head' 
                                style={styles.location}
                            />
                            <TextInput 
                                editable={false} 
                                value={`Y: ${location?.longitude !== undefined ? location?.longitude : ''}`} 
                                style={styles.location}
                            />
                        </View>
                        <TouchableOpacity style={styles.pickLocationButton} onPress={pickLocation}>
                            <Text style={{color: 'white'}}>Localizar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleCreate}>
                <Text style={{color: 'white'}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    </>
}

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        height: '25%',
        backgroundColor: '#99D4AD',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.35)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10
    },
    formContainer: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        flex: 1
    },
    input: {
        width: '100%',
    },
    inputLabel: {
        fontFamily: 'Poppins_500Medium',
    },
    inputName: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        fontFamily: 'Poppins_500Medium',
        paddingHorizontal: 10
    },
    input2: {
        paddingTop: 20
    },
    selectContainer: {
        paddingTop: 20
    },
    select: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    touch: {
        width: '45%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchText: {
        fontFamily: 'Poppins_600SemiBold'
    },
    pickLocationContainer0: {
        paddingTop: 20,
    },
    pickLocationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    locationContainer: {
        width: '45%',
    },
    pickLocationButton: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171F1D',
        borderRadius: 8,
    },
    location: {
        borderBottomWidth: 1,
        borderBottomColor: '#c2c2c2',
        textAlign: 'center'
    },
    submitButton: {
        width: '100%',
        height: 45,
        backgroundColor: '#171F1D',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }

});