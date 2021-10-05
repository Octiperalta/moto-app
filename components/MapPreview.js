import React from "react";
import { StyleSheet, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import Text from "./CustomText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GCP_API_KEY } from "@env";

const MapPreview = ({ coordinates = {} }) => {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${coordinates?.lat},${coordinates?.lon}&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${coordinates.lat},${coordinates.lon}&key=${GCP_API_KEY}`;

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      {"lat" in coordinates ? (
        <Image source={{ uri: mapPreviewUrl }} style={tw`h-full w-full`} />
      ) : (
        <View style={tw`flex-row items-center justify-center`}>
          <MaterialCommunityIcons
            name='map-clock-outline'
            size={25}
            color={tw.color("gray-300")}
          />
          <Text fontWeight='semibold' style={tw`ml-2 text-gray-300 text-lg`}>
            Location is not selected yet
          </Text>
        </View>
      )}
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({});
