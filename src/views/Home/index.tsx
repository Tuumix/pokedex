import React, { useEffect, useState } from 'react';
import { StatusBar, Text, SafeAreaView, View } from "react-native";
import Header from '../../components/Header';
import TextField from '../../components/TextField';

const Home: React.FC = () => {
    const [pokemonName, setPokemonName] = useState('testano');

    useEffect(() => {
    }, [])
    
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                barStyle={'dark-content'}
                showHideTransition={'fade'}
            />
            <Header title='What Pokemon are you looking for?' bgColor='#E1371F' >                
                <TextField 
                    title='What Pokemon are you looking for?' 
                    value={pokemonName} 
                    handleChange={setPokemonName} 
                />
            </Header>
        </SafeAreaView>
    )
}

export default Home;