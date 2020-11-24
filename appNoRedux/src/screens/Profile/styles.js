import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;
export const LogoutButton = styled.TouchableOpacity`
  width: 200px;
  margin: 10px 30px;
  background-color: #4eadbe;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const LogoutButtonTxt = styled.Text`
  font-size: 18px;
  color: #000000;
  font-weight: 700;
  color: #ffffff;
`;

export const ProfileArea = styled.View`
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const ProfilePicture = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  background-color: #e7e7e7;
  border-width: 2px;
  border-color: #ffffff;
  margin: 10px 0;
`;

export const ProfileName = styled.Text`
  color: #4eadbe;
  font-size: 18px;
`;

export const ProfileEmail = styled.Text`
  color: #4eadbe;
  font-size: 18px;
`;
