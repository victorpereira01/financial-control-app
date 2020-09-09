import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import api from '../../services/api';

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
            return <Text style={styles.positive}>R$ {transaction.value}</Text>
        } else {
            return <Text style={styles.negative}>R$ {transaction.value}</Text>
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your transactions</Text>

            <View style={styles.transactionContainer}>
                {transactions.map(transaction => {
                    return (
                        <View style={styles.item} key={transaction.id}>
                            <Text style={styles.itemText} >{transaction.name}</Text>
                            {isPositive(transaction)}
                        </View>
                    )
                })}
            </View>
        </View>
    )
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
    transactionContainer: {
        marginTop: 20,
        height: 320
    },
    item: {
        marginTop: 5,
        marginBottom: 5,
        height: 55,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        borderRightWidth: 1,
        borderRightColor: '#e0e0e0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemText: {
        color: '#616161',
        fontSize: 18,
        fontFamily: 'Ubuntu_400Regular',
        marginLeft: 20
    },
    itemText: {
        color: '#616161',
        fontSize: 18,
        fontFamily: 'Ubuntu_400Regular',
        marginLeft: 20
    },
    positive: {
        color: '#5ACC24',
        fontSize: 18,
        fontFamily: 'Ubuntu_400Regular',
        marginRight: 20
    },
    negative: {
        color: '#D3483F',
        fontSize: 18,
        fontFamily: 'Ubuntu_400Regular',
        marginRight: 20
    }
})