import React from 'react';
import { ActivityIndicator, View, StyleSheet, Dimensions } from 'react-native';


const LoadingIcon = ({ isIconAnimating, display }) => <ActivityIndicator style={[styles.loading, display === 'none' ? {width: 0, height: 0} : '']} display={display} size="large" color="#0000ff" animating={isIconAnimating} />;

const styles = StyleSheet.create({
    loading: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
    }
});

export default LoadingIcon;