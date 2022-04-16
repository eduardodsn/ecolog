import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';


import BackButton from '../../../assets/images/back.png'

export default function OtherInfo({ navigation }) {
    return <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Outros</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    As lixeiras nas cores verde, vermelho, amarelo, azul e marrom são as mais comumente encontradas em pontos estratégicos dos lugares públicos e privados com grande fluxo de pessoas. Contudo, há ainda outras 4 cores de lixeiras que são mais incomuns de serem encontradas. São elas:</Text>
                <Unorderedlist>
                    <Text style={styles.listItem}>
                        <Text style={styles.highlight}>Lixeira Preta</Text> para materiais feitos de madeira.
                    </Text>
                </Unorderedlist>
                <Unorderedlist>
                    <Text style={styles.listItem}>
                        <Text style={styles.highlight}>Lixeira Branca </Text>para resíduos descartados por hospitais e clínicas de saúde.
                    </Text>
                </Unorderedlist>
                <Unorderedlist>
                    <Text style={styles.listItem}>
                        <Text style={styles.highlight}>Lixeira Roxa </Text>usada para recolher materiais radioativos.
                    </Text>
                </Unorderedlist>
                <Unorderedlist>
                    <Text style={styles.listItem}>
                        <Text style={styles.highlight}>Lixeira Cinza </Text>cujo rejeito não pode ser separado ou está contaminado.
                    </Text>
                </Unorderedlist>
                
                <Text style={styles.description}>
                {'\n'}
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
        backgroundColor: '#E7CAF9',
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
    },
    listItem: {
        textAlign: 'justify'
    }
});