import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import Text from "../../components/CustomText";
import MapPreview from "../../components/MapPreview";

const OrderDetailScreen = ({ navigation, route }) => {
  const goBack = () => {
    navigation.goBack();
  };
  const { item } = route.params;

  return (
    <View style={tw`flex-1 bg-gray-50 relative`}>
      {/* HEADER */}
      <View style={tw`flex-row justify-center mt-14 px-6 items-center`}>
        {/* LEFT */}
        <View style={tw`absolute left-6`}>
          <TouchableOpacity
            onPress={goBack}
            style={tw`w-10 justify-center h-10 items-center relative`}>
            <MaterialIcons
              name='arrow-back-ios'
              size={24}
              color={tw.color("gray-700")}
            />
          </TouchableOpacity>
        </View>

        {/* CENTER */}
        <Text fontWeight='bold' style={tw`text-2xl text-red-500`}>
          {item.trackingCode}
        </Text>
      </View>

      {/* CONTENT */}
      <ScrollView style={tw`px-7 mt-5`}>
        {/* ORDER DETAIL */}
        <View style={tw`bg-gray-100 rounded-lg shadow overflow-hidden`}>
          {/* top */}
          <View style={tw`px-4 py-3`}>
            <Text fontWeight='semibold' style={tw`text-gray-400 text-sm`}>
              Delivery Address
            </Text>
            <Text
              numberOfLines={1}
              fontWeight='semibold'
              style={tw`-mt-1 text-gray-700 text-base`}>
              {item.address}
            </Text>
            <View style={tw`mt-2 flex-row`}>
              <View>
                <Text fontWeight='semibold' style={tw`text-gray-400 text-sm`}>
                  Cost
                </Text>
                <Text
                  numberOfLines={1}
                  fontWeight='semibold'
                  style={tw`-mt-1 text-gray-700 text-base`}>
                  $ {item.totalPrice}
                </Text>
              </View>
              <View style={tw`ml-8`}>
                <Text fontWeight='semibold' style={tw`text-gray-400 text-sm`}>
                  Deliver in
                </Text>
                <Text
                  numberOfLines={1}
                  fontWeight='semibold'
                  style={tw`-mt-1 text-gray-700 text-base`}>
                  3 Days
                </Text>
              </View>
            </View>
          </View>

          {/* map */}
          <View style={tw`bg-red-200 h-48`}>
            <MapPreview coordinates={item.coordinates} />
          </View>
        </View>

        {/* HISTORY */}
        <View style={tw`mt-4`}>
          <Text fontWeight='semibold' style={tw`text-gray-800 text-xl`}>
            History
          </Text>

          {/* track log */}
          <View style={tw`mt-2 bg-gray-100 px-3 py-3 rounded-lg`}>
            {/* section */}
            <View style={tw`flex-row items-center`}>
              <Text fontWeight='semibold' style={tw`text-base text-gray-700`}>
                {new Date().getDate()}{" "}
                {new Date().toLocaleString("default", { month: "short" })}
              </Text>
              <View style={tw`mx-5`}>
                <Octicons
                  name='primitive-dot'
                  size={17}
                  color={tw.color("red-500")}
                />
              </View>
              <Text fontWeight='semibold' style={tw`text-base text-gray-700`}>
                Arrived at sorting center
              </Text>
            </View>

            <View style={tw`flex-row items-center mt-5`}>
              <Text fontWeight='semibold' style={tw`text-base text-gray-500`}>
                {new Date().getDate() + 1}{" "}
                {new Date().toLocaleString("default", { month: "short" })}
              </Text>
              <View style={tw`mx-5`}>
                <Octicons
                  name='primitive-dot'
                  size={17}
                  color={tw.color("red-300")}
                />
              </View>
              <Text fontWeight='semibold' style={tw`text-base text-gray-500`}>
                Arrived at gateway
              </Text>
            </View>

            <View style={tw`flex-row items-center mt-5`}>
              <Text fontWeight='semibold' style={tw`text-base text-gray-500`}>
                {new Date().getDate() + 2}{" "}
                {new Date().toLocaleString("default", { month: "short" })}
              </Text>
              <View style={tw`mx-5`}>
                <Octicons
                  name='primitive-dot'
                  size={17}
                  color={tw.color("red-300")}
                />
              </View>
              <Text fontWeight='semibold' style={tw`text-base text-gray-500`}>
                Arrived at sorting center
              </Text>
            </View>

            <View style={tw`flex-row items-center mt-5`}>
              <Text fontWeight='semibold' style={tw`text-base text-gray-500`}>
                {new Date().getDate() + 3}{" "}
                {new Date().toLocaleString("default", { month: "short" })}
              </Text>
              <View style={tw`mx-5`}>
                <Octicons
                  name='primitive-dot'
                  size={17}
                  color={tw.color("red-300")}
                />
              </View>
              <Text fontWeight='semibold' style={tw`text-base text-gray-500`}>
                Package has been delivered
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({});
