import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';

import {signIn} from '../../store/User/User.actions';

// import {UserContext} from '../../contexts/UserContext';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

// import Api from '../../Api';
import api from '../../services/api';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  //   const {dispatch: userDispatch} = useContext(UserContext);
  //   const userData = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const api = 'https://api.b7web.com.br/devbarber/api/auth/login';

  const handleSignClick = () => {
    if (emailField != '' && passwordField != '') {
      const url = api + '?email=' + emailField + '&password=' + passwordField;
      dispatch(signIn(url));
      console.log('Oláaaaaaaaaaaaaaaaaaa:' + data);
      if (data.token) {
        AsyncStorage.setItem('token', data.token);

        // userDispatch({
        //   type: 'setAvatar',
        //   payload: {
        //     avatar: json.data.avatar,
        //   },
        // });

        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        alert('E-mail e/ou senha errados!');
      }
    } else {
      alert('Preencha os campos!');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
