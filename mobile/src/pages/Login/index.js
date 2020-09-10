import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import landingStyles from '../../../public/stylesheets/landing';
import mainStyles from '../../../public/stylesheets/main';

export default function Login() {

    return (
        <View style={landingStyles.container}>

            <Text style={landingStyles.header}>Financial Control</Text>

            <View style={landingStyles.form} >
                <View style={landingStyles.content}>

                    <Text style={landingStyles.title}>Login</Text>

                    <View style={landingStyles.inputContainer}>
                        <Text style={landingStyles.inputText}>E-mail</Text>
                        <TextInput style={landingStyles.input}></TextInput>
                    </View>

                    <View style={landingStyles.inputContainer}>
                        <Text style={landingStyles.inputText}>Password</Text>
                        <TextInput style={landingStyles.input} secureTextEntry={true}></TextInput>
                    </View>

                    <Text style={landingStyles.forgot}>Forgot password?</Text>

                    <RectButton style={mainStyles.button}>
                        <Text style={mainStyles.buttonText}>Sign In</Text>
                    </RectButton>

                    <Text style={landingStyles.create}>Don't have an account? <Link to='/Register' style={landingStyles.signUp}>Sign Up</Link></Text>

                    <Text style={landingStyles.or}>OR</Text>

                    <View style={landingStyles.iconsContainer}>
                        <Icon style={landingStyles.icon} name="facebook-square"></Icon>
                        <Icon style={landingStyles.icon} name="google-plus-square"></Icon>
                        <Icon style={landingStyles.icon} name="twitter-square"></Icon>
                    </View>

                </View>
            </View>
        </View>
    )
}