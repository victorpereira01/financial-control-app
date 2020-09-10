import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../../public/stylesheets/main'

export default function Login() {

    return (
        <View style={styles.container}>

            <Text style={styles.header}>Financial Control</Text>

            <View style={styles.form} >
                <View style={styles.content}>

                    <Text style={styles.title}>Login</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>E-mail</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry={true}></TextInput>
                    </View>

                    <Text style={styles.forgot}>Forgot password?</Text>

                    <RectButton style={globalStyles.button}>
                        <Text style={globalStyles.buttonText}>Sign In</Text>
                    </RectButton>

                    <Text style={styles.create}>Don't have an account? <Text style={styles.signUp}>Sign Up</Text></Text>

                    <Text style={styles.or}>OR</Text>

                    <View style={styles.iconsContainer}>
                        <Icon style={styles.icon} name="facebook-square"></Icon>
                        <Icon style={styles.icon} name="google-plus-square"></Icon>
                        <Icon style={styles.icon} name="twitter-square"></Icon>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8926D8'
    },
    header: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Ubuntu_400Regular',
        marginRight: 15,
        marginLeft: 15,
        paddingTop: 60,
        paddingBottom: 30
    },
    form: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 25,
    },
    content: {
        marginRight: 15,
        marginLeft: 15,
    },
    title: {
        color: '#575757',
        fontSize: 24,
        fontFamily: 'Ubuntu_500Medium',
        paddingTop: 50
    },
    inputContainer: {
        paddingTop: 50
    },
    inputText: {
        color: '#575757',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium',
        paddingBottom: 5
    },
    input: {
        fontSize: 17,
        fontFamily: 'Ubuntu_400Regular',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        borderRadius: 5,
        padding: 10,
        height: 40
    },
    forgot: {
        color: '#575757',
        fontSize: 14,
        fontFamily: 'Ubuntu_400Regular',
        alignSelf: 'flex-end',
        paddingTop: 8,
        paddingBottom: 40
    },
    create: {
        color: '#575757',
        fontFamily: 'Ubuntu_400Regular',
        paddingTop: 30,
        alignSelf: 'center'
    },
    signUp: {
        color: '#8926D8',
        fontFamily: 'Ubuntu_500Medium'
    },
    or: {
        color: '#e0e0e0',
        fontSize: 25,
        fontFamily: 'Ubuntu_500Medium',
        padding: 25,
        alignSelf: 'center'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },  
    icon: {
        paddingRight: 20,
        paddingLeft: 20,
        color: '#383838',
        fontSize: 50
    }
})