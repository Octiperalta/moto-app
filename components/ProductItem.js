import React, { useState } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Text from "./CustomText";
import tw from "tailwind-react-native-classnames";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductItem = ({ item, onPress: onSelected }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  
  return (
    <TouchableOpacity
      style={tw`bg-gray-200 flex-1 p-3 rounded-2xl m-2 `}
      onPress={() => onSelected(item)}>
      <View>
        <Image
          source={{ uri: item.imageUrl }}
          style={tw.style("self-center", {
            width: 100,
            height: 100,
            resizeMode: "contain",
          })}
        />
        <View style={tw`mt-1`}>
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            style={tw.style("text-gray-800 text-base flex-1 w-full")}
            fontWeight='bold'>
            {item.name}
          </Text>
          <View style={tw`flex-row mt-1 items-center justify-between`}>
            <Text style={tw`text-base text-red-700`} fontWeight='semibold'>
              $ {item.price}
            </Text>
            <TouchableOpacity style={tw`bg-gray-400 rounded-md p-1`}>
              <Entypo name='plus' size={14} color='rgba(243, 244, 246, 1)' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
