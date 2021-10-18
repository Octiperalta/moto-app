import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Text from "./CustomText";

const CategoryItem = ({ category, onPress: onSelected }) => {
  return (
    <View style={tw`flex justify-center  mr-2 items-center pb-2`}>
      <TouchableOpacity
        style={tw`w-14 h-14 bg-gray-200 rounded-lg items-center justify-center`}
        onPress={() => onSelected(category)}>
        <Image source={category.icon} style={tw`h-10 w-10 opacity-90`} />
      </TouchableOpacity>
      <Text style={tw`text-gray-700 text-xs`} fontWeight='semibold'>
        {category.name}
      </Text>
    </View>
  );
};

export default CategoryItem;
