import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`;