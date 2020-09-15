import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';
import { Link, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

import landingStyles from '../../../public/stylesheets/landing';
import mainStyles from '../../../public/stylesheets/main';

export default function Login() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    handleSubmit = async () => {

        try {
            const response = await api.get(`/email?value=${email}`);
            const userId = response.data.id;
         
            navigation.navigate('Main', {
                userId
            });
        } catch (e) {
            alert('Username or password is invalid');
        }
    }

    return (
        <View style={landingStyles.container}>

            <Text style={landingStyles.header}>Financial Control</Text>

            <View style={landingStyles.form} >
                <View style={landingStyles.content}>

                    <Text style={landingStyles.title}>Login</Text>

                    <View style={landingStyles.inputContainer}>
                        <Text style={landingStyles.inputText}>E-mail</Text>
                        <TextInput style={landingStyles.input} autoCapitalize='none' onChangeText={setEmail}></TextInput>
                    </View>

                    <View style={landingStyles.inputContainer}>
                        <Text style={landingStyles.inputText}>Password</Text>
                        <TextInput style={landingStyles.input} secureTextEntry={true} onChangeText={setPassword}></TextInput>
                    </View>

                    <Text style={landingStyles.forgot}>Forgot password?</Text>

                    <RectButton style={mainStyles.button} onPress={handleSubmit}>
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