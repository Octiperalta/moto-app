import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import Text from "./CustomText";
import tw from "tailwind-react-native-classnames";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const AuthScreenWrapper = ({ register = false, redirectPath, children }) => {
  const [hide, setHide] = useState(true);
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate(redirectPath);
  };

  return (
    <KeyboardAvoidingView behavior='height' style={tw`flex-1`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={tw`flex-1 bg-gray-50`}>
          <View style={tw`flex-1 mt-16`}>
            {/* TITLE */}
            <View style={tw`items-center`}>
              <Text fontWeight='bold' style={tw`text-3xl text-gray-700`}>
                {register ? "Create Account" : "Welcome Back"}
              </Text>
            </View>

            {/* FORM */}
            <View style={tw`px-7 mt-10`}>
              <Text fontWeight='semibold' style={tw`text-xl text-red-500`}>
                {register ? "Sign Up" : "Login"}
              </Text>
              {/* form fields */}
              <View>{children}</View>

              {!register && (
                <TouchableOpacity style={tw`mt-6 items-center`}>
                  <Text fontWeight='semibold' style={tw`text-red-500`}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              )}

              <View style={tw`mt-6`}>
                <TouchableOpacity
                  style={tw.style(
                    "bg-red-500 items-center rounded-lg py-2",
                    styles.shadow
                  )}>
                  <Text fontWeight='semibold' style={tw`text-xl text-gray-50`}>
                    {register ? "Sign Up" : "Login"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* FOOTER */}
            <View style={tw`flex-1 mt-3 justify-center items-center`}>
              {/* question */}
              <View style={tw`flex-row`}>
                <Text fontWeight='semibold' style={tw`text-gray-800`}>
                  {register ? "Already an user?" : "Are you a new user?"}
                </Text>
                <TouchableOpacity onPress={navigateTo}>
                  <Text fontWeight='semibold' style={tw`ml-2 text-red-500`}>
                    {register ? "Login" : "Sign up"}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* fake login options */}
              <View style={tw`mt-6`}>
                <View style={tw`flex-row`}>
                  <TouchableOpacity
                    style={tw`bg-red-500 rounded-full h-9 w-9 items-center justify-center`}>
                    <AntDesign
                      name='google'
                      size={19}
                      color={tw.color("gray-100")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`bg-red-500 rounded-full h-9 w-9 items-center justify-center mx-8`}>
                    <AntDesign
                      name='twitter'
                      size={19}
                      color={tw.color("gray-100")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`bg-red-500 rounded-full h-9 w-9 items-center justify-center`}>
                    <FontAwesome
                      name='facebook-f'
                      size={19}
                      color={tw.color("gray-100")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AuthScreenWrapper;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "rgba(239, 68, 68, 1);",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
