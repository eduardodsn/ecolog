import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

import ProfilePicture from '../../assets/images/profile.jpg'

import Vidro from '../../assets/images/vidro.png'
import Plastico from '../../assets/images/plastico.png'
import Metal from '../../assets/images/metal.png'
import Papel from '../../assets/images/papel.png'
import Organico from '../../assets/images/organico.png'
import Outros from '../../assets/images/outros.png'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ColorInfo({ navigation }) {
    const route = useRoute();
    const token = route.params.token;

    const [profile, setProfile] = useState({});

    async function loadProfile() {
        const response = fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
        const userInfo = await (await response).json();
        
        setProfile(userInfo)
    }

    useEffect(() => {
        loadProfile();
    }, [])

    return <View style={styles.dashboardContainer}>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>{profile?.name?.split(' ')[0]}, toque e conheça as cores da coleta seletiva</Text>
            <Image source={{uri: profile?.picture}} style={styles.imageProfile} />
        </View>

        <View style={styles.cardsContainer}>
            <View style={styles.rowCards}>
                <TouchableOpacity style={[styles.card, styles.greenGroup]} onPress={() => navigation.navigate('GlassInfo')}>
                    <Image source={Vidro} style={styles.image} />
                    <Text style={styles.garbageType} numberOfLines={1}>Vidro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.redGroup]} onPress={() => navigation.navigate('PlasticInfo')}>
                    <Image source={Plastico} style={styles.image} />
                    <Text style={styles.garbageType} numberOfLines={1}>Plástico</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rowCards}>
                <TouchableOpacity style={[styles.card, styles.yellowGroup]} onPress={() => navigation.navigate('MetalInfo')}>
                    <Image source={Metal} style={styles.image} />
                    <Text style={styles.garbageType} numberOfLines={1}>Metal</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.blueGroup]} onPress={() => navigation.navigate('PaperInfo')}>
                    <Image source={Papel} style={styles.image} />
                    <Text style={styles.garbageType} numberOfLines={1}>Papel</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rowCards}>
                <TouchableOpacity style={[styles.card, styles.brownGroup]} onPress={() => navigation.navigate('OrganicInfo')}>
                    <Image source={Organico} style={styles.image} />
                    <Text style={styles.garbageType} numberOfLines={1}>Orgânico</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.purpleGroup]} onPress={() => navigation.navigate('OtherInfo')}>
                    <Image source={Outros} style={styles.image} />
                    <Text style={styles.garbageType} numberOfLines={1}>Outros</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    dashboardContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 40,
        paddingTop: 30,
        backgroundColor: '#BDFFDB'
    },
    welcomeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    welcomeTitle: {
        width: 200,
        color: 'black',
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
    },
    imageProfile: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    image: {
        width: 60,
        height: 60,
    },
    cardsContainer: {
        marginTop: 30,
    },
    cardsContainerTitle: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'Poppins_600SemiBold',
        textShadowColor: 'rgba(0, 0, 0, 0.35)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10
    },
    rowCards: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        width: '48%',
        height: windowHeight / 5,
        borderRadius: 15,
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        elevation: 10,
    },
    ammountTitle: {
        fontFamily: 'Dosis_600SemiBold',
        fontSize: 60,
        marginBottom: -10,
        padding: 0
    },
    measureTitle: {
        fontSize: 20
    },
    garbageType: {
        width: '100%',
        fontFamily: 'Dosis_500Medium',
        fontSize: 22,
        color: '#898989'
    },
    greenGroup: {
        color: '#34A853',
        backgroundColor: '#DBFFDD'
    },
    redGroup: {
        color: '#EA4335',
        backgroundColor: '#FFC0BB'
    },
    yellowGroup: {
        color: '#FBBC05',
        backgroundColor: '#FFF4D2'
    },
    blueGroup: {
        color: '#4285F4',
        backgroundColor: '#BCD7FF'
    },
    brownGroup: {
        color: '#7F5539',
        backgroundColor: '#B99D8A'
    },
    purpleGroup: {
        color: '#9E00FF',
        backgroundColor: '#E7CAF9'
    },
    scheduleButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 10,
    },
    scheduleTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold'
    }
});