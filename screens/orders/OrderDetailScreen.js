import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "../../components/CustomText"


const OrderDetailScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={tw`flex-1 bg-gray-50 relative`}>
      {/* HEADER */}
      <View style={tw`flex-row justify-center mt-14 px-6 items-center`}>
        {/* LEFT */}
        <View style={tw`absolute left-6`}>
          <TouchableOpacity
            onPress={goBack}
            style={tw`w-10 justify-center h-10 items-center relative `}>
            <MaterialIcons
              name='arrow-back-ios'
              size={24}
              color={tw.color("gray-700")}
            />
          </TouchableOpacity>
        </View>

        {/* CENTER */}
        <Text fontWeight='bold' style={tw`text-2xl text-red-500 `}>
          345635616835614
        </Text>
      </View>
    </View>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({});
