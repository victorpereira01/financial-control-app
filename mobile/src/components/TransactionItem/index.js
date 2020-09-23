import React from 'react';
import { View, Text } from 'react-native';

import globalStyles from '../../../public/stylesheets/main';

const TransactionItem = (props) => (
    <View style={globalStyles.transactionItem} key={props.id}>
        <Text style={globalStyles.transactionText} >{props.name}</Text>
        {props.value}
    </View>
)

export default TransactionItem;
