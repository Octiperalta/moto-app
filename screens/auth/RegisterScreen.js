import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import Input from "../../components/Input";

const LoginScreen = () => {
  return (
    <AuthScreenWrapper register redirectPath='Login'>
      <Input
        redirectPath='Register'
        label='Full Name'
        icon='user'
        keyboardType='default'
      />
      <Input
        redirectPath='Register'
        label='Email'
        icon='mail'
        keyboardType='email-address'
      />
      <Input label='Password' icon='lock' password />
    </AuthScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
