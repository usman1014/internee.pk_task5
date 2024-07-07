import React from 'react'
import { Image, StyleSheet, Text, Vibration, View } from 'react-native'

export const AuthHeader = ({ screenName }) => {
    return (
        <View style={styles.header}>
            <Image source={require('../Assets/back.png')} style={styles.back} />
            <Text style={styles.screenName}>{screenName}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        padding: 12,
       // borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
        paddingTop:'10%'
    },
    back: {
        width: 30,
        height: 30,
    },
    screenName: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
        marginHorizontal: '3%'

    },
});