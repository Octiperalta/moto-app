import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import Input from "../../components/Input";
import { validateEmail, validatePassword } from "./validations";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/actions/auth.actions";
import { closeModal, openModal } from "../../store/actions/modal.actions";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    dispatch(closeModal());
  };
  const handleSignUp = async () => {
    const emailIsOk = validateEmail(email);
    const passwordIsOk = validatePassword(password);

    if (!fullname) {
      return dispatch(
        openModal("Full name field is required. Please try again.")
      );
    }
    if (!emailIsOk.ok) {
      return dispatch(openModal(emailIsOk.message));
    }
    if (!passwordIsOk.ok) {
      return dispatch(openModal(passwordIsOk.message));
    }

    dispatch(signup(email, password));
  };

  return (
    <AuthScreenWrapper register redirectPath='Login' onSubmit={handleSignUp}>
      <Modal
        open={modal.open}
        message={modal.message}
        handleClose={handleClose}
      />
      <Input
        redirectPath='Register'
        label='Full Name'
        icon='user'
        keyboardType='default'
        onChangeText={e => setFullname(e)}
        value={fullname}
      />
      <Input
        redirectPath='Register'
        label='Email'
        icon='mail'
        keyboardType='email-address'
        value={email}
        onChangeText={e => setEmail(e)}
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

export default RegisterScreen;

const styles = StyleSheet.create({});
