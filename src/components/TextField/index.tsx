import React from 'react';
import {Text, View} from 'react-native';
import { Container } from './styles';
import { TextFieldProps } from './types';
import Icon from 'react-native-vector-icons/FontAwesome';


const TextField: React.FC<TextFieldProps> = (props) => {
    const { title, icon, handleChange} = props;
    return (
        <>
            <Text>{title}</Text>
            <Container onEndEditing={(e) => handleChange(e.nativeEvent.text)}>
                {
                    icon && 
                        <Icon name="search" size={15}/>
                }
            </Container>
        </>
    )
}

export default TextField;