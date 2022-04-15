import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import ProfilePicture from '../../assets/images/profile.jpg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DashboardInfo({ token }) {
    const [profile, setProfile] = useState({});

    async function loadProfile() {
        const response = fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
        const userInfo = await (await response).json();
        setProfile(userInfo)
    }

    useEffect(() => {
        loadProfile();
    }, [])

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }


    return <View style={styles.dashboardContainer}>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Olá, {profile?.name?.split(' ')[0]}!</Text>
            <Image source={{uri: profile?.picture}} style={styles.image} />
        </View>

        <View style={styles.cardsContainer}>
            <Text style={styles.cardsContainerTitle}>Você já reciclou...</Text>
            <View style={styles.rowCards}>
                <View style={[styles.card, styles.greenGroup]}>
                    <Text style={[styles.ammountTitle, styles.greenGroup]}>
                        {generateRandomNumber()}
                        <Text style={[styles.measureTitle, styles.greenGroup]}>kg</Text>
                    </Text>
                    <Text style={styles.garbageType} numberOfLines={1}>Vidro</Text>
                </View>

                <View style={[styles.card, styles.redGroup]}>
                    <Text style={[styles.ammountTitle, styles.redGroup]}>
                        {generateRandomNumber()}
                        <Text style={[styles.measureTitle, styles.redGroup]}>kg</Text>
                    </Text>
                    <Text style={styles.garbageType} numberOfLines={1}>Plástico</Text>
                </View>
            </View>

            <View style={styles.rowCards}>
                <View style={[styles.card, styles.yellowGroup]}>
                    <Text style={[styles.ammountTitle, styles.yellowGroup]}>
                        {generateRandomNumber()}
                        <Text style={[styles.measureTitle, styles.yellowGroup]}>kg</Text>
                    </Text>
                    <Text style={styles.garbageType} numberOfLines={1}>Metal</Text>
                </View>

                <View style={[styles.card, styles.blueGroup]}>
                    <Text style={[styles.ammountTitle, styles.blueGroup]}>
                        {generateRandomNumber()}
                        <Text style={[styles.measureTitle, styles.blueGroup]}>kg</Text>
                    </Text>
                    <Text style={styles.garbageType} numberOfLines={1}>Papel</Text>
                </View>
            </View>
            <View style={styles.rowCards}>
                <View style={[styles.card, styles.brownGroup]}>
                    <Text style={[styles.ammountTitle, styles.brownGroup]}>
                        {generateRandomNumber()}
                        <Text style={[styles.measureTitle, styles.brownGroup]}>kg</Text>
                    </Text>
                    <Text style={styles.garbageType} numberOfLines={1}>Orgânico</Text>
                </View>
                <View style={[styles.card, styles.purpleGroup]}>
                    <Text style={[styles.ammountTitle, styles.purpleGroup]}>
                        {generateRandomNumber()}
                        <Text style={[styles.measureTitle, styles.purpleGroup]}>kg</Text>
                    </Text>
                    <Text style={styles.garbageType} numberOfLines={1}>Outros</Text>
                </View>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    dashboardContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
        color: '#FFF',
        fontSize: 30,
        fontFamily: 'Poppins_600SemiBold',
        textShadowColor: 'rgba(0, 0, 0, 0.35)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50
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
        justifyContent: 'flex-end',
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