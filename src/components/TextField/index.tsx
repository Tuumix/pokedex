import React from 'react';
import { TextInput, Text } from 'react-native';
import { Container, Input } from './styles';
import { TextFieldProps } from './types';
import Icon from 'react-native-vector-icons/FontAwesome';


const TextField: React.FC<TextFieldProps> = (props) => {
    const { title, value, handleChange} = props;
    return (
        <Container {...props}>
            <Icon name="search" size={15} />
            <Input value={value} onChange={(e:string) => handleChange(e)} />
        </Container>
    )
}

export default TextField;