import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';

import api from '../../services/api';
import globalStyles from '../../../public/stylesheets/main'
import TransactionItem from '../../components/TransactionItem';

export default function Transactions() {

    const [transactions, setTransactions] = useState([]);

    const route = useRoute();

    const userId = route.params.userId;

    useEffect(() => {
        loadTransactions();
    }, []);

    loadTransactions = async () => {
        const response = await api.get(`/${userId}/transactions`);
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
                        <TransactionItem
                            key={transaction.id}
                            id={transaction.id}
                            name={transaction.name}
                            value={isPositive(transaction)}
                        />
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