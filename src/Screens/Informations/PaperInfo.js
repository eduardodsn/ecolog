import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import BackButton from '../../../assets/images/back.png'

export default function PaperInfo({ navigation }) {
    return <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Papel</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Essa é a lixeira mais indicada para o descarte correto de papéis em geral. Isso inclui jornais, cadernos, papelão, caixas de pizza e caixas cartonadas de bebidas lácteas, por exemplo. É importante <Text style={styles.highlight}>não descartar os materiais feitos de papel sujos de alimentos líquidos ou sólidos</Text>.</Text>

                <Text style={styles.description}>
                    <Text style={styles.highlight}>Dicas: </Text>não descartar papel carbono, adesivos, papel celofane, papéis sanitários.
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
        backgroundColor: '#BCD7FF',
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