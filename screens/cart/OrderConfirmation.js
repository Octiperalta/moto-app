import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Text from "../../components/CustomText";

const OrderConfirmation = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`mt-16 mb-10 flex-1 justify-between`}>
        {/* TITLE */}
        <View style={tw`flex-1 items-center`}>
          <Text fontWeight='bold' style={tw`text-4xl text-red-500`}>
            Moto Market
          </Text>
          <Image
            source={require("../../assets/img/order-confirmation.png")}
            style={tw`h-72 w-72`}
          />

          {/* CONFIRMATION */}
          {/* top */}
          <View style={tw`px-8`}>
            <Text
              fontWeight='semibold'
              style={tw`text-2xl text-gray-700 text-center`}>
              Order Confirmed!
            </Text>
            <Text
              fontWeight='medium'
              style={tw.style("text-center text-lg mt-2 text-gray-400", {
                lineHeight: 22,
              })}>
              Thank you for your order. You will receive an email confirmation
              shortly.
            </Text>
            {/* bottom */}
            <Text
              fontWeight='medium'
              style={tw.style("text-center text-lg mt-3 text-gray-400", {
                lineHeight: 22,
              })}>
              Check the status of your order in the order tracking tab.
            </Text>
          </View>
        </View>

        <View style={tw`mx-6`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Shop")}
            style={tw`bg-red-500 mt-4 rounded-lg px-2 py-2 flex-row justify-center items-center relative`}>
            <Text fontWeight='bold' style={tw`text-gray-50 text-lg`}>
              Back to Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderConfirmation;

const styles = StyleSheet.create({});
