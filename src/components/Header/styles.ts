import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.bgColor};
    padding-left: 10px;
    padding-right: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 15%;
`

export const Title = styled.Text`
    font-weight: bold;
    color: black;
    font-size: 20px;
`

export const ImageContainer = styled.View`
    align-items: flex-end;
`