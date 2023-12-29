import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/Signup';
import SignIn from './src/screens/auth/Signin';
const App = () => {
  return (
    <SafeAreaView>
      {/* <Splash></Splash> */}
      {/* <SignUp></SignUp> */}
      <SignIn></SignIn>
    </SafeAreaView>
  );
};
export default App;
