import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  LogoutButton,
  LogoutButtonTxt,
  ProfileArea,
  ProfilePicture,
  ProfileName,
  ProfileEmail,
} from './styles';

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      setLoading(true); //start loading effect before fetching user data

      let json = await Api.getUserInfo(); //fetching user data

      if (json.error == '') {
        //validating Api fetch
        setUserInfo(json.data); //maping to local state
      } else {
        alert('Error:' + json.error);
      }

      setLoading(false); //stop laoding effect
    };
    getUserInfo();
  }, []);

  const handleLogoutClick = async () => {
    await Api.logOut();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      {userInfo && (
        <ProfileArea>
          <ProfilePicture source={{uri: userInfo.avatar}}></ProfilePicture>
          <ProfileName>{userInfo.name}</ProfileName>
          <ProfileEmail>{userInfo.email}</ProfileEmail>
        </ProfileArea>
      )}
      <LogoutButton onPress={handleLogoutClick}>
        <LogoutButtonTxt>Sair</LogoutButtonTxt>
      </LogoutButton>
    </Container>
  );
};
