import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import BackButton from '../../../assets/images/back.png'

export default function GlassInfo({ navigation }) {
    return <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Vidro</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>A cor verde é associada ao descarte de todos os objetos feitos a partir de vidro.Na lista de materiais que se encaixam nesse perfil, temos copos, pratos, garrafas, vasos, embalagens de conserva e muitos outros. É importante que sejam retiradas as tampas desses objetos, pois geralmente não são feitas de vidro.</Text>

                <Text style={styles.description}>
                    No caso de vidros quebrados, tome certas providências na hora de descartá-los! Caso não tenha uma lixeira verde por perto, <Text style={styles.highlight}>procure embrulhar os cacos de vidro em folhas de papel ou caixa de papelão</Text> para evitar que esse material cortante machuque os catadores de recicláveis.
                </Text>

                <Text style={styles.description}>
                    <Text style={styles.highlight}>Dicas: </Text>lave-os com água de reúso e retire as tampas.
                </Text>
            </View>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={BackButton} style={styles.imageButton}/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#DBFFDD',
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