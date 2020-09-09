import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import api from '../../services/api';
import globalStyles from '../../../public/stylesheets/main'

export default function Transactions() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        loadTransactions();
    }, []);

    loadTransactions = async () => {
        const response = await api.get('/1/transactions');
        const transactions = response.data;

        setTransactions(transactions);
    }

    isPositive = (transaction) => {
        if (transaction.value >= 0) {
            return <Text style={globalStyles.positive}>R$ {transaction.value}</Text>
        } else {
            return <Text style={globalStyles.negative}>R$ {transaction.value}</Text>
        }
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Your transactions</Text>

            <View style={styles.transactionContainer}>
                {transactions.map(transaction => {
                    return (
                        <View style={globalStyles.transactionItem} key={transaction.id}>
                            <Text style={globalStyles.transactionText} >{transaction.name}</Text>
                            {isPositive(transaction)}
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    transactionContainer: {
        marginTop: 20,
        height: 320
    }
})