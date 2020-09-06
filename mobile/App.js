import React from 'react';
import { Ubuntu_400Regular, Ubuntu_500Medium, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes'
import { AppLoading } from 'expo';

export default function App() {
    const [fonts] = useFonts({
        Ubuntu_400Regular,
        Ubuntu_500Medium
    })

    if(!fonts) {
        return <AppLoading /> 
    }

    return (
        <>
            <Routes />
        </>
    )
}