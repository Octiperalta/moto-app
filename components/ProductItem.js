import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Text from "./CustomText";
import tw from "tailwind-react-native-classnames";
import { Entypo } from "@expo/vector-icons";
import ImageBlurLoading from "react-native-image-blur-loading";

const ProductItem = ({ item, onPress: onSelected }) => {
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity
      style={tw`bg-gray-200 flex-1 p-3 rounded-2xl m-2 `}
      onPress={() => onSelected(item)}>
      <View>
        <Image
          source={{ uri: item.imageUrl }}
          onLoadEnd={() => setLoading(false)}
          style={tw.style("self-center", {
            width: 100,
            height: 100,
            resizeMode: "contain",
          })}
        />

        {loading && (
          <View
            style={tw.style("self-center justify-center absolute", {
              width: 100,
              height: 100,
            })}>
            <ActivityIndicator size='small' color={tw.color("red-500")} />
          </View>
        )}
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
