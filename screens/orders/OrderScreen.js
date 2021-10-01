import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Text from "../../components/CustomText";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

const OrderScreen = ({ navigation }) => {
  const go = () => {
    navigation.navigate("OrderDetail");
  };

  return (
    <View style={tw`flex-1 bg-gray-50 relative`}>
      {/* HEADER */}
      <View style={tw`flex-row justify-center mt-14 px-6 items-center`}>
        {/* CENTER */}
        <Text fontWeight='bold' style={tw`text-3xl text-red-500 `}>
          Orders
        </Text>
      </View>

      <View style={tw`px-7 mt-3 flex-1`}>
        <Text fontWeight='semibold' style={tw`text-2xl text-gray-700`}>
          Your Parcels
        </Text>
        {/* List */}
        <View>
          {/* Order */}
          <TouchableOpacity
            style={tw`flex-row bg-gray-200 px-3 py-3 mt-3 rounded-lg shadow-sm items-center`}>
            {/* icon */}
            <View style={tw`bg-gray-100 rounded-lg p-2 `}>
              <MaterialIcons
                name='delivery-dining'
                size={29}
                color={tw.color("gray-400")}
              />
            </View>
            <View style={tw`ml-3 flex-1`}>
              <Text fontWeight='semibold' style={tw`text-lg text-gray-700`}>
                {Date.now().toString()}
              </Text>
              <Text fontWeight='medium' style={tw`text-gray-500`}>
                Buenos Aires, Argentina
              </Text>
            </View>

            <View style={tw`flex-row items-center`}>
              <Octicons
                name='primitive-dot'
                size={10}
                color={tw.color("gray-500")}
              />
              <Text fontWeight='semibold' style={tw`text-gray-500 ml-1`}>
                Transit
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={go}
            style={tw`flex-row bg-gray-200 px-3 py-3 mt-3 rounded-lg shadow-sm items-center`}>
            {/* icon */}
            <View style={tw`bg-gray-100 rounded-lg p-2 `}>
              <MaterialIcons
                name='delivery-dining'
                size={29}
                color={tw.color("gray-400")}
              />
            </View>
            <View style={tw`ml-3 flex-1`}>
              <Text fontWeight='semibold' style={tw`text-lg text-gray-700`}>
                {Date.now().toString()}
              </Text>
              <Text fontWeight='medium' style={tw`text-gray-500`}>
                Buenos Aires, Argentina
              </Text>
            </View>

            <View style={tw`flex-row items-center`}>
              <Octicons
                name='primitive-dot'
                size={10}
                color={tw.color("gray-500")}
              />
              <Text fontWeight='semibold' style={tw`text-gray-500 ml-1`}>
                Transit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
