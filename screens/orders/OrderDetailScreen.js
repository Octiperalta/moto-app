import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import Text from "../../components/CustomText";

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
          345635616835614
        </Text>
      </View>

      {/* CONTENT */}
      <View style={tw`px-7 mt-5`}>
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
              Av. Rivadavia 3250, Buenos Aires, Argentina
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
                  $ 1200
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
          <View style={tw`bg-red-200`}>
            <Image
              source={require("../../assets/img/map.jpg")}
              style={{ width: "100%", height: 200 }}
            />
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
                {new Date().getDay()}{" "}
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
                {new Date().getDay() + 1}{" "}
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
                {new Date().getDay() + 2}{" "}
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
                {new Date().getDay() + 3}{" "}
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
      </View>
    </View>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({});
