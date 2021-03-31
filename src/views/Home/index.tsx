import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { 
    FlatList, 
    SafeAreaView, 
    StatusBar, 
    View, 
    ActivityIndicator 
} from "react-native";
import Header from '../../components/Header';
import TextField from '../../components/TextField';
import PokemonCard from './PokemonCard';

interface teste {
    count: number;
    next: string;
    previous: string;
    results: results[];
}

interface results {
    name: string;
    url: string;
}
const Home: React.FC = () => {
    const [data, setData] = useState<teste>({count: 0, next: '', previous: '', results: []});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        loadPokemons();
    }, [])

    async function loadPokemons() {
        await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then(response => response.data)
            .then(responseData => setData(responseData));
    }

    function extractNumber(value: string) {
        let matches = value.match(/\d+/g);
        return matches && matches[1];
    }

    function setPokeName(name: string) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.data)
                .then(responseData => setData(responseData))
    }

    const renderItem = ({item}) => {
        return (
            <PokemonCard 
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractNumber(item.url)}.png`} 
                pokemonName={item.name} 
            />
        )
    }

    return (
        <>
            <StatusBar
                animated={true}
                barStyle={'dark-content'}
                showHideTransition={'fade'}
            />
            <SafeAreaView style={{flex: 1}}>
                <Header title='What Pokemon are you looking for?' bgColor='#E1371F' >
                </Header>
                <View  style={{flex: 1}}>
                    {
                        data && 
                            <FlatList 
                                data={data.results}
                                renderItem={renderItem}
                                keyExtractor={item => item.name}
                                refreshing={refresh}
                                scrollEnabled={true}
                                numColumns={3}
                            />
                    }
                </View>
            </SafeAreaView>
        </>
    )
}

export default Home;