import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View, ActivityIndicator } from "react-native";
import Text from "./CustomText";
import tw from "tailwind-react-native-classnames";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/actions/cart.actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)

  const handleDeleteItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <View
      style={tw`bg-gray-200 px-3 py-2 rounded-lg overflow-hidden flex flex-row mb-5`}>
      {/* image */}
      <View
        style={tw`w-24 h-24 bg-gray-100 p-2 flex justify-center rounded-lg items-center`}>
        <Image
          source={{ uri: item.imageUrl }}
          onLoadEnd={() => setLoading(false)}
          style={tw.style("w-full h-20 ", {
            resizeMode: "contain",
          })}
        />

        {loading && (
          <View
            style={tw.style("self-center justify-center absolute", {
              width: 200,
              height: 200,
            })}>
            <ActivityIndicator size='small' color={tw.color("red-500")} />
          </View>
        )}
        
      </View>
      {/* details */}
      <View style={tw`ml-3 mt-1 flex-1 justify-between`}>
        <View>
          <Text fontWeight='semibold' style={tw`text-lg text-gray-700`}>
            {item.name}
          </Text>
          <Text fontWeight='medium' style={tw`text-base -mt-1 text-gray-400`}>
            {item.category.name}
          </Text>
        </View>
        <View style={tw`flex flex-row justify-between items-center`}>
          <View style={tw`flex flex-row items-start`}>
            <Text fontWeight='semibold' style={tw`text-sm text-gray-500`}>
              ${" "}
            </Text>
            <Text fontWeight='bold' style={tw`text-xl text-red-500`}>
              {item.price}
            </Text>
          </View>
          <TouchableOpacity onPress={handleDeleteItem} style={tw`w-8 h-8 justify-center`}>
            <Feather name='trash-2' size={22} color={tw.color("red-500")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
