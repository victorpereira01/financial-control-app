import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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

    handleNavigateToCreate = () => {
        this.props.navigation.navigate('Create'); 
    }

    isPositive = (transaction) => {
        if (transaction.value >= 0) {
            return <Text style={styles.positive}>R$ {transaction.value}</Text>
        } else {
            return <Text style={styles.negative}>R$ {transaction.value}</Text>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Current Balance</Text>
                <Text style={styles.balance}>R$ {this.state.user.balance}</Text>

                <View style={styles.historicContainer}>
                    <View style={styles.historicItem}>
                        <Text style={styles.historicTitle}>RENEVUE</Text>
                        <Text style={styles.revenueValue}>R$ {this.state.user.revenue}</Text>
                    </View>
                    <View style={styles.historicItem}>
                        <Text style={styles.historicTitle}>EXPENSES</Text>
                        <Text style={styles.expensesValue}>R$ {this.state.user.expenses}</Text>
                    </View>
                </View>

                <View style={styles.transactionHeader}>
                    <Text style={styles.transactionHeaderTitle}>Transactions</Text>
                    <RectButton style={styles.button} onPress={this.loadData}>
                        <Text style={styles.buttonText}>More</Text>
                    </RectButton>
                </View>

                <View style={styles.transactionContainer}>
                    {this.state.transactions.map(transaction => {
                        return (
                            <View style={styles.item} key={transaction.id}>
                                <Text style={styles.itemText} >{transaction.name}</Text>
                                {this.isPositive(transaction)}
                            </View>
                        )
                    })}
                </View>

                <RectButton style={styles.addButton} onPress={this.handleNavigateToCreate}>
                    <Text style={styles.addButtonText}>Add Transaction</Text>
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
        fontFamily: 'Ubuntu_400Regular'
    },
    balance: {
        color: '#8926D8',
        fontSize: 45,
        fontFamily: 'Ubuntu_400Regular'
    },
    historicContainer: {
        height: 100,
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        borderRightWidth: 1,
        borderRightColor: '#e0e0e0',
    },
    historicItem: {
        width: '50%',
        borderRightWidth: 1,
        borderColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    historicTitle: {
        color: '#575757',
        fontSize: 15,
        fontFamily: 'Ubuntu_500Medium',
        marginTop: 15,
        paddingBottom: 10
    },
    revenueValue: {
        color: '#5ACC24',
        fontSize: 22
    },
    expensesValue: {
        color: '#D3483F',
        fontSize: 22
    },
    transactionContainer: {
        marginTop: 20,
        height: 320
    },
    transactionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5,
        borderBottomColor: '#bfbfbf',
        marginTop: 20,
        paddingBottom: 7
    },
    transactionHeaderTitle: {
        color: '#616161',
        fontSize: 20,
        fontFamily: 'Ubuntu_400Regular',
        marginTop: 5
    },
    button: {
        backgroundColor: '#8926D8',
        paddingRight: 20,
        paddingLeft: 20,
        padding: 7,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Ubuntu_500Medium'
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
    },
    addButton: {
        marginTop: 20,
        backgroundColor: '#8926D8',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center'
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium'
    }
})