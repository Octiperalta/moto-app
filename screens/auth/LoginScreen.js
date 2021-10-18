import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { ERROR, login } from "../../store/actions/auth.actions";
import { validateEmail, validatePassword } from "./validations";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  console.log("Error state in component body: ", error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState({ open: false, message: "" });

  const closeModal = () => {
    setModal({ open: false, message: "" });
  };

  const handleLogin = () => {
    const { ok: correctEmail, message: emailMessage } = validateEmail(email);

    if (!correctEmail) return setModal({ open: true, message: emailMessage });

    dispatch(login(email, password));
    console.log("siguio");
    console.log("Error state in handleSubmit", error);
    if (error) return setModal({ open: true, message: error });
  };

  return (
    <AuthScreenWrapper redirectPath='Register' onSubmit={handleLogin}>
      <Modal
        open={modal.open}
        message={modal.message}
        handleClose={closeModal}
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
