import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api';
import globalStyles from '../../../public/stylesheets/main';

export default function Create() {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    handleSubmit = async () => {
        const transaction = {
            name,
            value
        }

        await api.post('/1/transactions', transaction);

        handleNavigateBack();
    }

    handleNavigateBack = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Add a Transaction</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Name</Text>
                <TextInput style={styles.input} onChangeText={setName} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Value</Text>
                <TextInput keyboardType='numeric' style={styles.input} onChangeText={setValue} />
            </View>

            <View style={styles.blank}></View>

            <RectButton style={globalStyles.button} onPress={handleSubmit}>
                <Text style={globalStyles.buttonText}>Confirm</Text>
            </RectButton>
            <RectButton style={styles.cancelButton} onPress={handleNavigateBack}>
                <Text style={globalStyles.buttonText}>Cancel</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 30,
    },
    placeholder: {
        color: '#616161',
        fontSize: 17,
        fontFamily: 'Ubuntu_400Regular',
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
    cancelButton: {
        marginTop: 20,
        backgroundColor: '#D3483F',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center'
    },
    blank: {
        paddingTop: 320
    }
});