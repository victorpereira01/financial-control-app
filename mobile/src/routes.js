import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Create from './pages/Create';
import Transactions from './pages/Transactions';
import Header from './components/Header';
import { Button, Text } from 'react-native';

const AppStack = createStackNavigator();

const stackedPageOptions = {
    title: "Financial Control",
    headerTitleStyle: {
        marginRight: 55,
        alignSelf: 'center',
    },
    headerTintColor: "#8926D8",
    headerStyle: {
        backgroundColor: "white",
    }
}

const mainPageOptions = {
    headerLeft: null,
    title: "Financial Control",
    headerTitleStyle: {
        marginLeft: 50,
        alignSelf: 'center',
    },
    headerTintColor: "#8926D8",
    headerStyle: {
        backgroundColor: "white",
    },
    headerRight: () => (
        <Header>oi</Header>
    ),
    gesturesEnabled: false,
}

const initialPages = {
    headerShown: false
}

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Login" component={Login} options={initialPages} />
                <AppStack.Screen name="Register" component={Register} options={initialPages} />
                <AppStack.Screen name="Main" component={Main} options={mainPageOptions} />
                <AppStack.Screen name="Create" component={Create} options={stackedPageOptions} />
                <AppStack.Screen name="Transactions" component={Transactions} options={stackedPageOptions} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;