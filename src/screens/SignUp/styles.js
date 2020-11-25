import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    backgroundColor: #00BFFF;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #4169E1;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #F8F8FF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #0000CD; 
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #0000CD;
    font-weight: bold;
    margin-left: 5px;
`;