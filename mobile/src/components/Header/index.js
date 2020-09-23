import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {

    const navigation = useNavigation();

    handleLogout = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Icon onPress={handleLogout} style={styles.icon} name="sign-out"></Icon>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20
    },
    icon: {
        fontSize: 22,
        color: '#D3483F',
    }
})