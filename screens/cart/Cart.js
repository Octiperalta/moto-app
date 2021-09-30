import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Text from "../../components/CustomText";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";

const Cart = ({ navigation }) => {
  const cartProducts = useSelector(state => state.cart.items);
  const cartTotal = useSelector(state => state.cart.total);

  const renderItem = ({ item }) => {
    return <CartItem item={item} />;
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      {/* HEADER */}
      <View
        style={tw`flex-row mt-14 px-7 justify-center items-center relative`}>
        {/* left */}
        <View style={tw`absolute left-6`}>
          <TouchableOpacity
            onPress={goBack}
            style={tw`w-10 justify-center h-10 items-center`}>
            <MaterialIcons
              name='arrow-back-ios'
              size={24}
              color={tw.color("gray-700")}
            />
          </TouchableOpacity>
        </View>
        {/* center */}
        <View>
          <Text fontWeight='bold' style={tw`text-2xl text-gray-700`}>
            My Cart
          </Text>
        </View>
      </View>

      {/* PRODUCTS LIST  */}
      <View style={tw`mt-6 px-7 flex-1`}>
        <FlatList
          data={cartProducts}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>

      {/* CHECKOUT */}
      <View
        style={tw`px-7 py-6 bg-gray-100 border-t border-gray-300 shadow-sm`}>
        <View style={tw`flex flex-row justify-between`}>
          <View style={tw`flex flex-row items-center`}>
            <Text fontWeight='medium' style={tw`text-xl text-gray-700`}>
              Total{" "}
            </Text>
            <Text style={tw`text-lg text-gray-500`}>
              ({cartProducts.length} items)
            </Text>
          </View>
          <Text fontWeight='bold' style={tw`text-2xl text-red-600`}>
            $ {cartTotal}
          </Text>
        </View>
        <View style={tw`shadow-xl`}>
          <TouchableOpacity
            style={tw`bg-red-500 mt-4 rounded-lg px-2 py-2 flex-row justify-center items-center relative`}>
            <Text fontWeight='bold' style={tw`text-gray-50 text-lg`}>
              Buy now
            </Text>
            <View style={tw`absolute right-4 bg-red-900 rounded-md p-1`}>
              <MaterialIcons
                name='arrow-forward'
                size={22}
                color={tw.color("gray-50")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
