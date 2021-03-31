import React from 'react';
import { Text } from 'react-native';
import {
    Container, ImageContainer
} from './styles';
import { Image } from 'react-native';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = (props) => {
    const { title } = props;
    return (
        <Container {...props}>
            <Text>ポケモン図鑑！</Text>
                <Image source={require('../../assets/Images/pikachu.png')} style={{width: 90, height: 80}}/>
            {props.children}
        </Container>
    )
}

export default Header;