import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Text from "./CustomText";

const CategoryItem = ({ category, onPress: onSelected }) => {
  return (
    <View style={tw`flex justify-center  mr-2 items-center pb-2`}>
      <TouchableOpacity
        style={tw`w-14 h-14 bg-gray-200 rounded-lg`}
        onPress={() => onSelected(category)}></TouchableOpacity>
      <Text style={tw`text-red-800 text-xs`} fontWeight='semibold'>
        {category.name}
      </Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
