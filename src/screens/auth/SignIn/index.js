import React, {useState} from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignIn = () => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {
    console.log('Test Sign in');
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="******" />
      <Button style={styles.button} title="Sign In"></Button>
      <Seperator text="Or sign up with"></Seperator>
      <GoogleLogin></GoogleLogin>
      <Text style={styles.footerText}>
        Don’t have an account? Sign Up
        <Text onPress={onSignIn} style={styles.footerLink}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignIn;
