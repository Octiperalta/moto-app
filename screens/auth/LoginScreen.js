import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { login } from "../../store/actions/auth.actions";
import { closeModal, openModal } from "../../store/actions/modal.actions";
import { validateEmail, validatePassword } from "./validations";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);

  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456789");

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleLogin = () => {
    const emailIsOk = validateEmail(email);
    const passwordIsOk = password.length !== 0;

    if (!emailIsOk.ok) {
      return dispatch(openModal(emailIsOk.message));
    }

    if (!passwordIsOk) {
      return dispatch(
        openModal("Password field is required. Please try again.")
      );
    }

    dispatch(login(email, password));
  };

  return (
    <AuthScreenWrapper redirectPath='Register' onSubmit={handleLogin}>
      <Modal
        open={modal.open}
        message={modal.message}
        handleClose={handleClose}
      />

      <Input
        redirectPath='Register'
        label='Email'
        icon='mail'
        keyboardType='email-address'
        onChangeText={e => setEmail(e)}
        value={email}
      />
      <Input
        label='Password'
        icon='lock'
        password
        value={password}
        onChangeText={e => setPassword(e)}
      />
    </AuthScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

{
  /* field 1*/
}
//  <View style={tw`mt-6`}>
//  {/* label */}
//  <View style={tw`flex-row items-center`}>
//    <Feather name='user' size={17} color={tw.color("gray-500")} />
//    <Text
//      fontWeight='medium'
//      style={tw`ml-1 text-base text-gray-500`}>
//      Email
//    </Text>
//  </View>

//  {/* input */}
//  <TextInput
//    style={tw.style(
//      "mt-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-700",
//      { fontSize: 16 }
//    )}
//  />
// </View>

// {/* field 2*/}
// <View style={tw`mt-6`}>
//  {/* label */}
//  <View style={tw`flex-row items-center`}>
//    <Feather name='lock' size={17} color={tw.color("gray-500")} />
//    <Text
//      fontWeight='medium'
//      style={tw`ml-1 text-base text-gray-500`}>
//      Password
//    </Text>
//  </View>
//  {/* password input */}
//  <View
//    style={tw`flex-row items-center rounded-lg border border-gray-300 pr-3 mt-1`}>
//    <TextInput
//      style={tw.style("px-3 py-2 text-gray-700 flex-1", {
//        fontSize: 16,
//      })}
//      secureTextEntry={hide}
//    />
//    <TouchableOpacity onPress={() => setHide(state => !state)}>
//      <Feather
//        name='eye-off'
//        size={18}
//        color={tw.color("gray-500")}
//      />
//    </TouchableOpacity>
//  </View>
// </View>
