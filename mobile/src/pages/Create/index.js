import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import api from '../../services/api';

export default class Create extends Component {

    state = {
        name: '',
        value: '',
    }
    
    handleSubmit = async () => {
        const transaction = {
            name: this.state.name,
            value: this.state.value
        }

        await api.post('/1/transactions', transaction);

        this.handleNavigateBack();
    }

    handleNavigateBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Add a Transaction</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.placeholder}>Name</Text>
                    <TextInput style={styles.input} onChangeText={(name) => this.setState({ name })} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.placeholder}>Value</Text>
                    <TextInput keyboardType='numeric' style={styles.input} onChangeText={(value) => this.setState({ value })} />
                </View>

                <RectButton style={styles.confirmButton} onPress={this.handleSubmit}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </RectButton>
                <RectButton style={styles.cancelButton} onPress={this.handleNavigateBack}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </RectButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    confirmButton: {
        marginTop: 320,
        backgroundColor: '#8926D8',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center'
    },
    cancelButton: {
        marginTop: 20,
        backgroundColor: '#D3483F',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium'
    }
});