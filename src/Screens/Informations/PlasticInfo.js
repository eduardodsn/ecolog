import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import BackButton from '../../../assets/images/back.png'

export default function PlasticInfo({ navigation }) {
    return <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Plástico</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    Um dos materiais mais presentes em nosso cotidiano com certeza é o plástico. Pelo fato da sua decomposição levar várias séculos para acontecer, o plástico precisa ser tratado e reaproveitado da melhor maneira possível.
                    {'\n\n'}
                    Portanto, use as lixeiras de cor vermelha para descartar embalagens plásticas, garrafas PET, embalagens de produtos de limpeza, potes de cremes e xampus, tubos e canos, brinquedos, sacos, sacolas e saquinhos de leite e papéis plastificados, metalizados ou parafinados, como embalagens de biscoito.
                    {'\n\n'}
                    <Text style={styles.highlight}>Dicas: </Text> lave-os com água de reúso para que não sobrem restos dos produtos, principalmente no caso de detergentes e xampus, que podem dificultar a triagem e o aproveitamento do material. No caso de embalagens com tampas, retire-as.
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
        backgroundColor: '#FFC0BB',
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
        paddingBottom: 10,
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