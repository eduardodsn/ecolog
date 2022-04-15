import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import BackButton from '../../../assets/images/back.png'

export default function OrganicInfo({ navigation }) {
    return <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Orgânico</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Resíduos orgânicos também possuem uma lixeira própria! Quando não for possível aproveitar toda a comida comprada, descarte os restos dos alimentos e qualquer outro tipo de resíduo cuja origem seja biológica na lixeira marrom.</Text>

                <Text style={styles.description}>
                    <Text style={styles.highlight}>Dicas: </Text>não descartar ossos, óleo, graxa, gordura, remédios, produtos químicos.
                </Text>
            </View>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={BackButton} style={styles.imageButton} />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#B99D8A',
        paddingHorizontal: 40,
        paddingVertical: 40,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 30,
    },
    descriptionContainer: {

    },
    description: {
        fontFamily: 'Poppins_400Regular',
        paddingTop: 30,
        textAlign: 'justify'
    },
    highlight: {
        fontFamily: 'Poppins_600SemiBold',
    },
    imageButton: {
        width: 50,
        height: 50,
    }
});