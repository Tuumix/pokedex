import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.bgColor};
    padding-left: 10px;
    padding-right: 10px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: 150px;
    justify-content: flex-end;
`

export const Title = styled.Text`
    font-weight: bold;
    color: black;
    font-size: 20px;
`