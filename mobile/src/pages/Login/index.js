import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {

    return (
        <View>
            <Text>Financial Control</Text>

            <View >
                <Text>Login</Text>

                <View>
                    <Text>E-mail</Text>
                    <TextInput></TextInput>
                </View>

                <View>
                    <Text>Password</Text>
                    <TextInput secureTextEntry={true}></TextInput>
                </View>

                <Text>Forgot password?</Text>

                <RectButton>
                    <Text>Sign In</Text>
                </RectButton>

                <Text>OR</Text>

                <View>
                    <Icon name="facebook-square"></Icon>
                    <Icon name="google-plus-square"></Icon>
                    <Icon name="twitter-square"></Icon>
                </View>

            </View>
        </View>
    )
}