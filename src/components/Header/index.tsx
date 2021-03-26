import React from 'react';
import { Text } from 'react-native';
import {
    Container, Title
} from './styles';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = (props) => {
    const { title } = props;
    return (
        <Container {...props}>
            <Title>{title}</Title>
            {props.children}
        </Container>
    )
}

export default Header;