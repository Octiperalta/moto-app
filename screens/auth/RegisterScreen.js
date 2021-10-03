import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import Input from "../../components/Input";
import { validateEmail, validatePassword } from "./validations";
import Modal from "../../components/Modal";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/auth.actions";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState({ open: false, message: "" });

  const closeModal = () => {
    setModal({ open: false, message: "" });
  };
  const handleSignUp = async () => {
    const { ok: correctEmail, message: emailMessage } = validateEmail(email);
    const { ok: correctPassword, message: passwordMessage } = validatePassword(password);

    if (!fullname) return setModal({ open: true, message: "Fullname is required" });
    if (!correctEmail) return setModal({ open: true, message: emailMessage });
    if (!correctPassword) return setModal({ open: true, message: passwordMessage });

    //! REVISAR: tengo que encontrar la  forma de manejar errores
    dispatch(signup(email, password));
  };

  return (
    <AuthScreenWrapper register redirectPath='Login' onSubmit={handleSignUp}>
      <Modal
        open={modal.open}
        message={modal.message}
        handleClose={closeModal}
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
