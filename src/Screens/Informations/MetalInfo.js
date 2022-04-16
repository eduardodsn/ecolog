import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import BackButton from '../../../assets/images/back.png'

export default function MetalInfo({ navigation }) {
    return <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Metal</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    Objetos feitos de material metálico também possuem uma cor específica para que seu descarte respeite as regras da coleta seletiva. <Text style={styles.highlight}>Latas de alumínio como as de refrigerante, ferragens, parafusos, arames, latas de sardinha vazias, esquadrias e molduras de quadros</Text> são alguns dos exemplos mais comuns do que deve ser colocado na lixeira amarela.
                    {'\n\n'}
                    <Text style={styles.highlight}>Dicas: </Text>latas devem ser amassadas ou prensadas para facilitar o armazenamento.
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
        backgroundColor: '#FFF4D2',
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 30,
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        paddingBottom: 20,
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