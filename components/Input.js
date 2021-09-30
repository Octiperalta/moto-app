import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import Text from "./CustomText";
import tw from "tailwind-react-native-classnames";

const Input = ({ label, icon, password, keyboardType, ...rest }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={tw`mt-6`}>
      {/* label */}
      <View style={tw`flex-row items-center`}>
        <Feather name={icon} size={17} color={tw.color("gray-500")} />
        <Text fontWeight='medium' style={tw`ml-1 text-base text-gray-500`}>
          {label}
        </Text>
      </View>

      {/* input */}
      {password ? (
        <View
          style={tw`flex-row items-center rounded-lg border border-gray-300 pr-3 mt-1`}>
          <TextInput
            {...rest}
            style={tw.style("px-3 py-2 text-gray-700 flex-1", {
              fontSize: 16,
            })}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(state => !state)}>
            <Feather name='eye-off' size={18} color={tw.color("gray-500")} />
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          keyboardType={keyboardType}
          {...rest}
          style={tw.style(
            "mt-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-700",
            { fontSize: 16 }
          )}
        />
      )}
    </View>
  );
};

export default Input;
