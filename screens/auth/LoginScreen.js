import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { login } from "../../store/actions/auth.actions";
import { closeModal, openModal } from "../../store/actions/modal.actions";
import { validateEmail } from "./validations";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
