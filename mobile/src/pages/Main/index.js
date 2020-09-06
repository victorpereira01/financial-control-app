import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../../services/api';

export default class Main extends Component {

    state = {
        user: [],
        transactions: [],
    }

    componentDidMount() {
        this.loadData();
        this.loadTransactions();
    }

    loadData = async () => {
        const response = await api.get('/1');

        const user = response.data;

        this.setState({ user });
    }

    loadTransactions = async () => {
        const response = await api.get('/1/transactions');

        const transactions = response.data;

        this.setState({ transactions });
    }

    render() {
        return (
            <View>
                <Text>{this.state.user.balance}</Text>
                <Text>{this.state.user.revenue}</Text>
                <Text>{this.state.user.expenses}</Text>
                {this.state.transactions.map(transaction => (
                    <Text key={transaction.id}>{transaction.name} {transaction.value}</Text>
                ))}
            </View>
        )
    }
}