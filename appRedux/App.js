import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default () => {
  return (
    // <UserContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
    // </UserContextProvider>
  );
};
