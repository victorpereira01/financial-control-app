import React from 'react';
import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
    container: {
        marginRight: 15,
        marginLeft: 15,
        backgroundColor: '#f0f0f0'
    },
    title: {
        color: '#616161',
        marginTop: 20,
        paddingBottom: 10,
        fontSize: 20,
        fontFamily: 'Ubuntu_400Regular',
        borderBottomWidth: 1.5,
        borderBottomColor: '#bfbfbf',
    },
    transactionItem: {
        marginTop: 5,
        marginBottom: 5,
        height: 55,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        borderRightWidth: 1,
        borderRightColor: '#e0e0e0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    transactionText: {
        color: '#616161',
        fontSize: 18,
        fontFamily: 'Ubuntu_400Regular',
        marginLeft: 20
    },
    positive: {
        color: '#5ACC24',
        fontSize: 18,
        fontFamily: 'Ubuntu_400Regular',
        marginRight: 20
    },
    negative: {
        color: '#D3483F',
        fontSize: 18,
        fontFamily: 'Ubuntu_400Regular',
        marginRight: 20
    },
    button: {
        marginTop: 20,
        backgroundColor: '#8926D8',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium'
    }
})