import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthScreenWrapper from '../../components/AuthScreenWrapper'
import Input from '../../components/Input'

const LoginScreen = () => {
    return (
        <AuthScreenWrapper redirectPath="Register">
            <Input redirectPath="Register" label="Email" icon="mail" keyboardType="email-address" />
            <Input label="Password" icon="lock" password/>
        </AuthScreenWrapper>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})

 {/* field 1*/}
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