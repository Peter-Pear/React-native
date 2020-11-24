import React, {useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {getToken} from '../../store/User/User.actions';

import BarberLogo from '../../assets/barber.svg';

export default () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const data = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);
  const api = 'https://api.b7web.com.br/devbarber/api/auth/refresh';

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token'); //go get token in device storage

      const url = api + '?token=' + token;
      dispatch(getToken(url));

      if (token) {
        if (data.token) {
          await AsyncStorage.setItem('token', data.token); //update token

          // userDispatch({
          //   type: 'setAvatar',
          //   payload: {
          //     avatar: res.data.avatar, //get user Avatar
          //   },
          // });

          navigation.reset({
            routes: [{name: 'MainTab'}], //navigate to first tab on MainTab
          });
        } else {
          navigation.navigate('SignIn'); //check if token has expired
        }
      } else {
        navigation.navigate('SignIn'); //check for first login / there is no token
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
