import React, { useState } from 'react';
import { Text} from 'react-native';
import { Container, Image } from './styles';
import { PokemonCardProps } from './types';

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
    const { image, pokemonName } = props;

    return (
        <Container>
            <Image source={{uri: image}} />
            <Text>
                {pokemonName}
            </Text>
        </Container>
    ) 
}

export default PokemonCard;