import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import Text from "../../components/CustomText";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import * as Location from "expo-location";
import MapPreview from "../../components/MapPreview";
import { GCP_API_KEY } from "@env";
import axios from "axios";

const Address = ({ navigation }) => {
  const [coordinates, setCoordinates] = useState();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const disabled = !coordinates;

  const goBack = () => {
    navigation.goBack();
  };
  const reverseGeocode = async (lat, lon) => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GCP_API_KEY}`
    );
    const address = response.data.results[1].formatted_address.split(", ");
    return `${address[0]}, ${address[2]}, ${address[3]}`;
  };
  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permiso de localizacion para usar la aplicacion",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };
  const handleGetCurrentLocation = async () => {
    setLoading(true);
    const isLocationOk = await verifyPermissions();

    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({ timeout: 5000 });

    setCoordinates({
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    });
    const address = await reverseGeocode(
      location.coords.latitude,
      location.coords.longitude
    );
    setAddress(address);
    setLoading(false);
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
            Delivery
          </Text>
        </View>
      </View>

      {/* CONTENT */}
      <View style={tw`mt-6 px-7 flex-1`}>
        <Text fontWeight='semibold' style={tw`text-xl text-gray-700`}>
          Address
        </Text>
        <View style={tw`bg-gray-200 rounded py-2 px-2 mt-2`}>
          <Text>Selected Address: </Text>
          <Text
            fontWeight='semibold'
            style={tw.style("text-gray-700 mt-1", {
              fontSize: 16,
              lineHeight: 16,
            })}>
            {address ? address : "No location"}
          </Text>
        </View>

        {/* buttons */}
        <TouchableOpacity
          onPress={handleGetCurrentLocation}
          style={tw`flex-row mt-3 items-center justify-center py-2 rounded-md bg-red-500`}>
          <MaterialIcons
            name='home-filled'
            size={24}
            color={tw.color("gray-50")}
          />
          <Text fontWeight='semibold' style={tw`ml-2 text-gray-50 text-lg`}>
            Use current location
          </Text>

          {loading && (
            <View style={tw`absolute right-5`}>
              <ActivityIndicator size='small' color={tw.color("gray-50")} />
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={true}
          onPress={() => console.log("Falta implementar")}
          style={tw`flex-row mt-3 py-2 items-center bg-gray-100 border border-red-500 rounded justify-center bg-gray-50 opacity-40`}>
          <MaterialIcons
            name='location-pin'
            size={25}
            color={tw.color("red-500")}
          />
          <Text fontWeight='semibold' style={tw`ml-2 text-lg text-red-500`}>
            Choose a location
          </Text>
        </TouchableOpacity>

        {/* map */}
        <View style={tw`mt-5 border border-gray-400 h-40 rounded`}>
          <MapPreview coordinates={coordinates} />
        </View>
      </View>

      {/* go to payment */}
      <View style={tw`shadow-xl px-7 mb-5`}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CheckoutConfirmation", {
              coordinates,
              address,
            })
          }
          disabled={disabled}
          style={tw`mt-4 rounded-lg px-2 py-2 flex-row justify-center items-center relative ${
            disabled ? "bg-red-300" : "bg-red-500"
          }`}>
          <Text fontWeight='bold' style={tw`text-gray-50 text-lg`}>
            Continue
          </Text>
          <View
            style={tw`absolute right-4 rounded-md p-1  ${
              disabled ? "bg-red-400" : "bg-red-900"
            }`}>
            <MaterialIcons
              name='arrow-forward'
              size={22}
              color={tw.color("gray-50")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({});
